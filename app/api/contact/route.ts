import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const recipient = "contact@proguardweb.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character);
}

function errorResponse(message: string, status: number, cause?: unknown) {
  const detail = process.env.NODE_ENV === "development" && cause instanceof Error ? cause.message : undefined;
  return Response.json({ error: message, ...(detail ? { detail } : {}) }, { status });
}

export async function POST(request: Request) {
  console.info("[contact] Request received");

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch (error) {
    console.error("[contact] Failed to parse request body", error);
    return errorResponse("The submitted form data is invalid.", 400, error);
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  console.info("[contact] Parsed body", { nameLength: name.length, hasEmail: Boolean(email), subjectLength: subject.length, messageLength: message.length });

  if (!name || !email || !subject || !message || !emailPattern.test(email) || [name, email, subject, message].some((value) => value.length > 5000) || /[\r\n]/.test(subject)) {
    console.warn("[contact] Validation failed");
    return errorResponse("Please provide a valid name, email address, subject, and message.", 400);
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !Number.isInteger(smtpPort) || smtpPort <= 0 || !smtpUser || !smtpPass) {
    console.error("[contact] SMTP configuration is incomplete", { hasHost: Boolean(smtpHost), hasPort: Number.isInteger(smtpPort), hasUser: Boolean(smtpUser), hasPassword: Boolean(smtpPass) });
    return errorResponse("Email delivery is not configured. Please try again later.", 500);
  }

  console.info("[contact] Creating SMTP transporter", { host: smtpHost, port: smtpPort, secure: smtpPort === 465 });
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
  });

  try {
    console.info("[contact] Verifying SMTP connection");
    await transporter.verify();
    console.info("[contact] SMTP connection verified");

    const mail = await transporter.sendMail({
      from: { name: "ProGuard Web Contact", address: smtpUser },
      to: recipient,
      replyTo: { name, address: email },
      subject: `[Website enquiry] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    console.info("[contact] Email sent successfully", { messageId: mail.messageId, accepted: mail.accepted.length, rejected: mail.rejected.length });
    return Response.json({ message: "Your message has been sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("[contact] SMTP delivery failed", error);
    return errorResponse("We could not deliver your message. Please try again later.", 502, error);
  }
}

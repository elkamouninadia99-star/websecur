import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ProGuard Web",
    short_name: "ProGuard Web",
    description: "Premium website development and cybersecurity solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#03101d",
    theme_color: "#03101d",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}

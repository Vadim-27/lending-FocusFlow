import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FocusFlow",
    short_name: "FocusFlow",
    description: "Deep focus, made effortless.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafa",
    theme_color: "#0f766e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

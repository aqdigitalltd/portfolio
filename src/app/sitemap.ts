import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const staticRoutes = ["", "/about", "/blogs"] as const

// Blog article URLs are added here once the blog data source is in place.
export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }))
}

import type { Metadata } from "next"
import StyleGuide from "./StyleGuide"

export const metadata: Metadata = {
  title: "Style guide",
  alternates: {
    canonical: "/style-guide",
  },
}

export default function StyleGuidePage() {
  return <StyleGuide />
}

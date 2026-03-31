import { Metadata } from "next"
import AboutContent from "@/components/about-content"

export const metadata: Metadata = {
  title: "About | Sk Ramiz Raza",
  description: "Learn more about Sk Ramiz Raza, his academic background in Science and Computer Applications, and his journey into full-stack development.",
}

export default function AboutPage() {
  return <AboutContent />
}

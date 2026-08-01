import type { IconType } from "react-icons"
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export type SocialLink = {
  external: boolean
  icon: IconType
  label: string
  url: string
}

export const socialLinks: SocialLink[] = [
  {
    external: true,
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/danishaft",
  },
  {
    external: true,
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ejeh-daniel-482409190/",
  },
  {
    external: true,
    icon: FaXTwitter,
    label: "X",
    url: "https://x.com/EjehAy_Daniel",
  },
  {
    external: false,
    icon: FaEnvelope,
    label: "Email",
    url: "mailto:connectejehdanielayo@outlook.com",
  },
]

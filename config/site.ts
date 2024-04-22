import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://awbeat.com"

export const siteConfig: SiteConfig = {
  name: "AWBeat",
  author: "AWBeaters",
  description:
    "",
  keywords: [

  ],
  url: {
    base: baseUrl,
    author: "",
  },
  ogImage: `${baseUrl}/featured_img.png`,
}

export const contactConfig: ContactConfig = {
  email: "adrianleb@gmail.com",
}

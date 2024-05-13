import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
export const alphaLyraeMedium = localFont({ src: '../public/fonts/AlphaLyrae-Medium.woff2' })

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

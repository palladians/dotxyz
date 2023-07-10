import { Poppins, Space_Grotesk } from 'next/font/google'

export const heading = Space_Grotesk({ subsets: ['latin'] })
export const body = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

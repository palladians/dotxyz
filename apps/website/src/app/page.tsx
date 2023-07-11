import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Palladians'
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

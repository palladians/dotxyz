import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Layout } from '@/components/Layout'
export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}
import { Navbar } from '~/components/navbar'
import Hero from './_components/hero-section'
import Features from './_components/features-section'
import { PageFooter } from './_components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PageFooter />
    </>
  )
}

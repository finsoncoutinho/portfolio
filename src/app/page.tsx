import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'

export default function Home() {
  return (
    <main className='bg-accent min-h-screen dark '>
      <Header />
      <HeroSection />
      <SkillsSection />
    </main>
  )
}

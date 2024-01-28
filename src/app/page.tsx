import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'

export default function Home() {
  return (
    <main className='bg-accent min-h-screen dark '>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

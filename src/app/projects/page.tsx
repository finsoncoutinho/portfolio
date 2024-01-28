import { promises as fs } from 'fs'
import ProjectItem from '@/components/ProjectItem'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Projects = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/services/more-projects.json',
    'utf8'
  )
  const data = JSON.parse(file)

  interface IProject {
    id: number
    thumbnail: string
    video: string
    projectTitle: string
    projectDescription: string
    techStack: string
    liveLink: string
    githubRepo: string
    postmanCollection: string
  }
  return (
    <div className='bg-accent min-h-screen dark flex flex-col items-center mb'>
      <header className='sticky top-0 flex gap-8 px-6 py-4  md:px-10 shadow-md bg-background  items-center  text-white w-full z-50'>
        <Link href='/' className='hover:cursor-pointer'>
          <ArrowLeft size={32} />
        </Link>
        <h1 className='text-lg font-semibold'>More projects</h1>
      </header>
      <div className='grid gap-6 my-20    lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10'>
        {data.map((project: IProject) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}

export default Projects

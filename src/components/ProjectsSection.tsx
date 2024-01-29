import { promises as fs } from 'fs'
import React from 'react'
import ProjectItem from './ProjectItem'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ProjectsSection = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/app/main-projects.json',
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
    <section id='projects' className=' px-10 py-32 '>
      <h1 className='text-white flex justify-center font-semibold text-3xl  mb-20 '>
        Projects
      </h1>
      <div className='flex gap-5  flex-col lg:basis-2 lg:flex-row'>
        {data.map((project: IProject) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>

      <Link
        href='/projects'
        className='mt-20 cursor-pointer border-2 text-white  border-white w-52 py-2 rounded-full text-xl justify-center items-center mx-auto flex gap-1 hover:scale-105'
      >
        More projects
        <ArrowRight />
      </Link>
    </section>
  )
}

export default ProjectsSection

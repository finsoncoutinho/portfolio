import { promises as fs } from 'fs'
import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsSection = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/services/data.json',
    'utf8'
  )
  const data = JSON.parse(file)

  interface IProject {
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
        {data.map((project: IProject, i: number) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

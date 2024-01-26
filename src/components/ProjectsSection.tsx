import React from 'react'
import { data } from '@/services/data'
import ProjectItem from './ProjectItem'

const ProjectsSection = () => {
  return (
    <section id='projects' className=' px-10 py-32 '>
      <h1 className='text-white flex justify-center font-semibold text-3xl  mb-20 '>
        Projects
      </h1>
      <div className='flex gap-5  flex-col lg:basis-2 lg:flex-row'>
        {data.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

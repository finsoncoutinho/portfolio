import React from 'react'
import Image from 'next/image'

import CustomButton from './CustomButton'
import { Github, ExternalLink, Archive } from 'lucide-react'
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

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <div className='w-full rounded-xl border-none bg-background '>
      <div className='p-4  text-white flex  flex-col items-start justify-between'>
        <div>
          <Image
            className='rounded-t-xl  mb-6 w-full'
            src='/img.png'
            width={500}
            height={500}
            alt={project.projectTitle}
          />

          <p className='font-bold text-xl mb-1 '>{project.projectTitle}</p>
          <div className='flex gap-6  mt-4'>
            {project.liveLink.length > 0 && (
              <CustomButton
                url={project.liveLink}
                classname='flex gap-2 font-semibold'
              >
                {' '}
                <ExternalLink />
                Live
              </CustomButton>
            )}
            {project.githubRepo.length > 0 && (
              <CustomButton
                url={project.githubRepo}
                classname='flex gap-2 font-semibold'
              >
                {' '}
                <Github />
                Github
              </CustomButton>
            )}
            {project.postmanCollection.length > 0 && (
              <CustomButton
                url={project.postmanCollection}
                classname='flex gap-2 font-semibold'
              >
                <Archive />
                Postman
              </CustomButton>
            )}
          </div>
          <p className='text-wrap mt-4'>
            <span className='font-semibold'>Stack: </span> {project.techStack}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem

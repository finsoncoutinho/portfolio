import React from 'react'
import Image from 'next/image'

import CustomButton from './CustomButton'
import { Github, ExternalLink, Archive } from 'lucide-react'
import Link from 'next/link'
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

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <Link
      href={`projects/${project.projectTitle.toLowerCase()}`}
      className='w-full rounded-xl border-none bg-background hover:scale-105'
    >
      <div className='p-4  text-white flex  flex-col items-start justify-between'>
        <div className='w-full'>
          <Image
            className='rounded-t-xl  mb-6 w-full'
            src={project.thumbnail}
            width={100}
            height={100}
            alt={project.projectTitle}
          />

          <p className='font-bold text-xl mb-1 '>
            {project.projectTitle.split('-').join(' ')}
          </p>

          <div className='flex gap-6  mt-4 flex-wrap'>
            {project.liveLink.length > 0 && (
              <CustomButton
                altText={`Live link of ${project.projectTitle}`}
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
                altText={`Github repo of ${project.projectTitle}`}
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
                altText={`Postman link of ${project.projectTitle}`}
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
    </Link>
  )
}

export default ProjectItem

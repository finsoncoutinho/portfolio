import BackButton from '@/components/BackButton'
import CustomButton from '@/components/CustomButton'
import VideoPlayer from '@/components/VideoPlayer'
import { promises as fs } from 'fs'
import { Archive, ArrowLeft, Divide, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { YouTubeProps } from 'react-youtube'

const ProjectDetails = async ({ params }: { params: { project: string } }) => {
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
  const file = await fs.readFile(
    process.cwd() + '/src/services/main-projects.json',
    'utf8'
  )
  const file2 = await fs.readFile(
    process.cwd() + '/src/services/more-projects.json',
    'utf8'
  )
  const JSONdata = JSON.parse(file)
  const JSONdata2 = JSON.parse(file2)
  const data: IProject = [...JSONdata, ...JSONdata2].find(
    (project: IProject) => project.projectTitle === params.project
  )
  const optsSM: YouTubeProps['opts'] = {
    width: '300',
    height: '169',
    playerVars: {
      autoplay: 1,
    },
  }
  const optsMD: YouTubeProps['opts'] = {
    width: '550',
    height: '309',
    playerVars: {
      autoplay: 1,
    },
  }
  const optsLG: YouTubeProps['opts'] = {
    width: '800',
    height: '450',
    playerVars: {
      autoplay: 1,
    },
  }
  return (
    <div className='bg-accent min-h-screen dark flex flex-col items-center'>
      <header className='sticky top-0 flex gap-8 px-6 py-4  md:px-10 shadow-md bg-background  items-center  text-white w-full'>
        <BackButton />
        <h1 className='text-lg font-semibold'>
          {params.project.split('-').join(' ')}
        </h1>
      </header>
      <main className='my-20  lg:w-[800px] md:w-[550px] w-[300px] '>
        {data.video !== null && (
          <div>
            <div className='hidden lg:block '>
              <VideoPlayer videoID={data.video} options={optsLG} />
            </div>
            <div className='hidden md:block lg:hidden'>
              <VideoPlayer videoID={data.video} options={optsMD} />
            </div>
            <div className=' md:hidden'>
              <VideoPlayer videoID={data.video} options={optsSM} />
            </div>
          </div>
        )}
        {data.video === null && (
          <div>
            <Image
              className='rounded-xl  mb-6 w-full'
              src={data.thumbnail}
              width={100}
              height={100}
              alt={data.projectTitle}
              priority
            />
          </div>
        )}
        <p className='font-bold text-3xl mb-1 text-white mt-10'>
          {data.projectTitle.split('-').join(' ')}
        </p>
        <div className='flex gap-6  mt-4'>
          {data.liveLink.length > 0 && (
            <CustomButton
              url={data.liveLink}
              classname='flex gap-2 font-semibold'
            >
              {' '}
              <ExternalLink />
              Live
            </CustomButton>
          )}
          {data.githubRepo.length > 0 && (
            <CustomButton
              url={data.githubRepo}
              classname='flex gap-2 font-semibold'
            >
              {' '}
              <Github />
              Github
            </CustomButton>
          )}
          {data.postmanCollection.length > 0 && (
            <CustomButton
              url={data.postmanCollection}
              classname='flex gap-2 font-semibold'
            >
              <Archive />
              Postman
            </CustomButton>
          )}
        </div>
        <p className='text-wrap mt-4 text-white italic md:text-lg'>
          <span className='font-semibold  '>Stack: </span> {data.techStack}
        </p>
        <div className='text-white mt-8 flex flex-col gap-2'>
          {data.projectDescription.split('\n').map((i) => (
            <p key={i}>- {i} </p>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProjectDetails

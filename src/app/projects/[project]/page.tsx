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
  // const file = await fs.readFile(
  //   process.cwd() + '/src/app/main-projects.json',
  //   'utf8'
  // )
  // const file2 = await fs.readFile(
  //   process.cwd() + '/src/app/more-projects.json',
  //   'utf8'
  // )
  // const JSONdata = JSON.parse(file)
  // const JSONdata2 = JSON.parse(file2)
  // const data: IProject = [...JSONdata, ...JSONdata2].find(
  //   (project: IProject) => project.projectTitle.toLowerCase() === params.project
  // )

  const projects = [
    {
      id: 1,
      thumbnail: '/devnotes.png',
      video: null,
      projectTitle: 'Devnotes',
      projectDescription:
        'Used TypeScript for both frontend and backend development\nUtilized Node.js and Express to build the server\nImplemented MongoDB as the database, Mongoose as the ORM, and MongoDB Atlas for data storage\nCrafted MongoDB aggregation pipelines for data population, implemented pre-hooks to hash passwords using Bcrypt, and developed custom methods\nUtilized Zod for input validation\nUsed Multer for handling file uploads and Cloudinary for storing files\nEmployed Nodemailer for sending emails\nImplemented an auth system using JWT and HTTP-only cookies using Cookie-parser and authorization via a custom middleware\nUtilized NextJS, Shadcn UI, and Tailwind CSS to construct the UI',
      techStack:
        'Typescript, NextJS, Tailwind CSS, Shadcn UI, React Query, NodeJS, ExpressJS, MongoDB, Mongoose, Cloudinary, Turborepo',

      liveLink: '',
      githubRepo: 'https://github.com/finsoncoutinho/devnotes/tree/dev',
      postmanCollection:
        'https://www.postman.com/lively-resonance-268837/workspace/finson/collection/20774906-a1cf919d-c53f-4724-b77f-0d49d6752bae?action=share&creator=20774906&active-environment=20774906-0f75f5fa-23e0-4216-a810-cc7a281f2c3f',
    },
    {
      id: 2,
      thumbnail: '/the-wild-oasis.png',
      video: 'TNyWGwxZq58',
      projectTitle: 'The-Wild-Oasis',
      projectDescription:
        'Implemented authentication and backend APIs using Supabase\nDeveloped the UI using ReactJS and Styled Components\nImplemented filtering, sorting, and pagination functionalities\nUtilized React Hook Form to manage form state and handle validation\nUtilized React Hot Toast for handling application notifications\nDeveloped an analytics dashboard featuring data visualization through charts using Recharts\nLeveraged React Query for remote state management',
      techStack:
        'Javascript, ReactJS, Styled Components, Recharts, React Query, React Hook Form, React Hot Toast, Supabase',
      liveLink: 'https://the-wild-oasis-ashy-five.vercel.app/',
      githubRepo: 'https://github.com/finsoncoutinho/the-wild-oasis',
      postmanCollection: '',
    },
    {
      id: 3,
      thumbnail: '/fast-react-pizza.png',
      video: '7sQ9ZQhAvAU',
      projectTitle: 'Fast-react-pizza',
      projectDescription:
        'Constructed the UI with ReactJS and Tailwind CSS\nImplemented custom actions and selector methods to effectively manage and showcase both cart and user state using Redux Toolkit\nSuccessfully integrated the provided APIs to handle various functionalities, including fetching menu data, creating orders, updating order information, and fetching order details based on order ID',
      techStack: 'Javascript, ReactJS, Tailwind CSS, Redux Toolkit',
      liveLink: 'https://fast-react-pizza-eta.vercel.app/',
      githubRepo: 'https://github.com/finsoncoutinho/fast-react-pizza',
      postmanCollection: '',
    },
    {
      id: 4,
      thumbnail: '/worldwise.png',
      video: 'B2uD8SY_AMA',
      projectTitle: 'WorldWise',
      projectDescription:
        'Utilized ReactJS along with module CSS to develop the user interface\nEmployed the Context API along with useReducer to effectively manage the application state in React\nIntegrated Leaflet and React Leaflet to incorporate map functionality into the app\nUtilized JSON-server to establish a dummy backend for testing and development purposes.',
      techStack: 'Javascript, ReactJS, Leaflet, React Leaflet, Context API',

      liveLink:
        'https://fast-react-pizza-k4da-b9i0q04cn-finsoncoutinho.vercel.app/',
      githubRepo: 'https://github.com/finsoncoutinho/worldwise',
      postmanCollection: '',
    },
    {
      id: 5,
      thumbnail: '/usePopcorn.png',
      video: 'eKVeVCkbwpI',
      projectTitle: 'usePopcorn',
      projectDescription:
        'Employed React along with CSS to craft the user interface\nUtilized the OMDB API to fetch a list of movies by name and retrieve detailed information about specific movies\nDeveloped a custom rating component with full customization, allowing for extensive configuration through the use of passed props\nImplemented custom hooks to abstract and encapsulate state and logic, promoting reusability and modularization in the codebase',
      techStack: 'Javascript, ReactJS, CSS',

      liveLink: 'https://use-popcorn-lmsoqpks7-finsoncoutinho.vercel.app/',
      githubRepo: 'https://github.com/finsoncoutinho/usePopcorn',
      postmanCollection: '',
    },
    {
      id: 6,
      thumbnail: '/react-quiz.png',
      video: 'GVu2IdamjSQ',
      projectTitle: 'React-Quiz',
      projectDescription:
        'Employed React along with CSS to craft the user interface\nImplemented the Context API along with useReducer to manage the application state, effectively avoiding prop drilling and ensuring a more efficient state management system\nDeveloped a custom hook to streamline the usage of the Context API within the application, promoting reusability and simplifying the integration of context-related functionality',
      techStack: 'Javascript, ReactJS, Context API, CSS',

      liveLink: 'https://react-quiz-b4d40mcfn-finsoncoutinho.vercel.app/',
      githubRepo: 'https://github.com/finsoncoutinho/react-quiz',
      postmanCollection: '',
    },
    {
      id: 7,
      thumbnail: '/keeper.png',
      video: 'utC-FGrRrko',
      projectTitle: 'Keeper',
      projectDescription:
        'Used React, Material-UI Core, Icons, and CSS to create and style the user interface of the application\nImplemented functionalities to create, list, and delete notes in the application',
      techStack: 'Javascript, ReactJS, CSS',

      liveLink: 'https://keeper-dsqw5ff4f-finsoncoutinho.vercel.app/',
      githubRepo: 'https://github.com/finsoncoutinho/Keeper',
      postmanCollection: '',
    },
    {
      id: 9,
      thumbnail: '/forkify.png',
      video: 'vGxduvsNw8U',
      projectTitle: 'Forkify',
      projectDescription:
        'Developed an application using HTML, CSS, and Vanilla JavaScript, showcasing a combination of structured markup, styling, and client-side scripting for dynamic functionality\nIntegrated API calls and manipulated the DOM using Vanilla JavaScript, demonstrating dynamic interactions and data fetching in the application',
      techStack: 'HTML, CSS, Javascript, Parcel',

      liveLink: '',
      githubRepo: 'https://github.com/finsoncoutinho/forkify',
      postmanCollection: '',
    },
    {
      id: 10,
      thumbnail: '/omnifood.png',
      video: 'p5AuDVJABYc',
      projectTitle: 'Omnifood',
      projectDescription:
        'Developed a website using HTML and CSS\nImplemented responsive design using media queries',
      techStack: 'HTML, CSS',

      liveLink: 'https://omnifood-finson.netlify.app/',
      githubRepo: 'https://github.com/finsoncoutinho/Omnifood',
      postmanCollection: '',
    },
    {
      id: 10,
      thumbnail: '/twitter-profile.png',
      video: 'K3GqJoLvAGs',
      projectTitle: 'Twitter-Profile',
      projectDescription:
        'Challenged my CSS skills by creating a pixel-perfect replica of my Twitter profile\nUtilized Flexbox and Grid to achieve the layout',
      techStack: 'HTML, CSS',

      liveLink: 'https://finsoncoutinho.github.io/Twitter-HTML-CSS/',
      githubRepo: 'https://github.com/finsoncoutinho/Twitter-HTML-CSS',
      postmanCollection: '',
    },
  ]

  const data = projects.find(
    (project) => project.projectTitle.toLowerCase() === params.project
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
        {data?.video !== null && (
          <div>
            <div className='hidden lg:block '>
              <VideoPlayer videoID={data?.video!} options={optsLG} />
            </div>
            <div className='hidden md:block lg:hidden'>
              <VideoPlayer videoID={data?.video!} options={optsMD} />
            </div>
            <div className=' md:hidden'>
              <VideoPlayer videoID={data?.video!} options={optsSM} />
            </div>
          </div>
        )}
        {data?.video === null && (
          <div>
            <Image
              className='rounded-xl  mb-6 w-full'
              src={data?.thumbnail}
              width={100}
              height={100}
              alt={data?.projectTitle}
              priority
            />
          </div>
        )}
        <p className='font-bold text-3xl mb-1 text-white mt-10'>
          {data?.projectTitle.split('-').join(' ')}
        </p>
        <div className='flex gap-6  mt-4'>
          {data?.liveLink.length! > 0 && (
            <CustomButton
              altText={`Live link of ${data?.projectTitle}`}
              url={data?.liveLink!}
              classname='flex gap-2 font-semibold'
            >
              {' '}
              <ExternalLink />
              Live
            </CustomButton>
          )}
          {data?.githubRepo.length! > 0 && (
            <CustomButton
              altText={`Github repo of ${data?.projectTitle}`}
              url={data?.githubRepo!}
              classname='flex gap-2 font-semibold'
            >
              {' '}
              <Github />
              Github
            </CustomButton>
          )}
          {data?.postmanCollection.length! > 0 && (
            <CustomButton
              altText={`Postman link of ${data?.projectTitle}`}
              url={data?.postmanCollection!}
              classname='flex gap-2 font-semibold'
            >
              <Archive />
              Postman
            </CustomButton>
          )}
        </div>
        <p className='text-wrap mt-4 text-white italic md:text-lg'>
          <span className='font-semibold  '>Stack: </span> {data?.techStack}
        </p>
        <div className='text-white mt-8 flex flex-col gap-2'>
          {data?.projectDescription.split('\n').map((i) => (
            <p key={i}>- {i} </p>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProjectDetails

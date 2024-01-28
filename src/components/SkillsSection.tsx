import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const SkillsSection = () => {
  return (
    <section className='py-32 bg-background px-10 '>
      <h1 className='text-white flex justify-center font-semibold text-3xl  mb-20 '>
        Technical Skills
      </h1>
      <div className='flex md:flex-row gap-4 flex-col '>
        <Card className='w-full  bg-accent border-none'>
          <CardHeader className='text-center'>
            <CardTitle className='text-lg'>Frontend</CardTitle>
            <CardContent className='flex p-2 flex-wrap gap-2'>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-yellow-300'>
                Javascript
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-primary'>
                Typescript
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-primary'>
                ReactJS
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-white'>
                NextJS
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-purple-400'>
                Redux Toolkit
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white  border-orange-400'>
                React Query
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-primary'>
                Tailwind CSS
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-white'>
                Shadcn UI
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border text-white border-primary'>
                Material UI
              </p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className='w-full bg-accent border-none'>
          <CardHeader className='text-center'>
            <CardTitle>Backend</CardTitle>
            <CardContent className='flex p-2 flex-wrap gap-2'>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-yellow-400'>
                Javascript
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-primary'>
                Typescript
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-green-400'>
                NodeJS
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-primary'>
                ExpressJS
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-green-400'>
                Mongoose
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-primary'>
                Zod
              </p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className='w-full bg-accent border-none'>
          <CardHeader className='text-center'>
            <CardTitle>Database</CardTitle>
            <CardContent className='flex p-2 flex-wrap gap-2'>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-emerald-400'>
                MongoDB
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-orange-400'>
                MySQL
              </p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className='w-full bg-accent border-none'>
          <CardHeader className='text-center'>
            <CardTitle>DevOps</CardTitle>
            <CardContent className='flex p-2 flex-wrap gap-2'>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-orange-400'>
                Git
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-primary'>
                Docker
              </p>
              <p className=' px-2 py-1 rounded-lg font-medium border bg-lightBackground border-yellow-400'>
                AWS
              </p>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

export default SkillsSection

import React from 'react'
import { BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaHashnode } from 'react-icons/fa6'
import CustomButton from './CustomButton'
const ContactSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section
      id='contact'
      className='pt-32 pb-10 bg-background px-10 text-center '
    >
      <div className='md:w-[400px] rounded-xl border-none  text-white bg-accent mx-auto p-10 flex flex-col gap-8'>
        <h1 className='text-white flex justify-center font-semibold text-3xl   '>
          Let&apos;s build together 🚀
        </h1>
        <p>
          Interested in working together? Let&apos;s connect and have a chat
        </p>
        <CustomButton
          altText="Let's do this"
          url='mailto:finsoncoutinho2125@gmail.com'
          classname='bg-accent border-4 border-primary font-bold text-lg text-white px-10 py-6 rounded-full'
        >
          Let&apos;s do this
        </CustomButton>
      </div>
      <div className='flex gap-8 justify-center mt-16 flex-wrap'>
        <CustomButton
          altText='Github'
          url='https://github.com/finsoncoutinho'
          classname='bg-trasperent border-2 border-white rounded-full p-6 hover:bg-background hover:scale-105'
        >
          <FaGithub className='text-primary ' size={28} />
        </CustomButton>
        <CustomButton
          altText='Twitter'
          url='https://twitter.com/finsoncoutinho'
          classname='bg-trasperent border-2 border-white rounded-full p-6 hover:bg-background hover:scale-105'
        >
          <BsTwitterX className='text-primary ' size={28} />
        </CustomButton>
        <CustomButton
          altText='LinkedIn'
          url='https://www.linkedin.com/in/finsoncoutinho'
          classname='bg-trasperent border-2 border-white rounded-full p-6 hover:bg-background hover:scale-105'
        >
          <FaLinkedin className='text-primary ' size={28} />
        </CustomButton>
        <CustomButton
          altText='Youtube'
          url='https://www.youtube.com/@finsoncoutinho'
          classname='bg-trasperent border-2 border-white rounded-full p-6 hover:bg-background hover:scale-105'
        >
          <BsYoutube className='text-primary ' size={28} />
        </CustomButton>
        <CustomButton
          altText='Hashnode'
          url='https://finsoncoutinho.hashnode.dev'
          classname='bg-trasperent border-2 border-white rounded-full p-6 hover:bg-background hover:scale-105'
        >
          <FaHashnode className='text-primary ' size={28} />
        </CustomButton>
      </div>
      <p className='text-white mx-auto mt-20'>
        Hand crafted with passion and precision in code. &#169; Finson Coutinho{' '}
        {currentYear}. All rights reserved
      </p>
    </section>
  )
}

export default ContactSection

import YouTube, { YouTubeProps } from 'react-youtube'

import { Mail, Github } from 'lucide-react'
import CustomButton from './CustomButton'
import VideoPlayer from './VideoPlayer'
const HeroSection = () => {
  const optsSM: YouTubeProps['opts'] = {
    width: '300',
    height: '169',
    playerVars: {
      autoplay: 1,
    },
  }
  const optsMD: YouTubeProps['opts'] = {
    width: '438',
    height: '246',
    playerVars: {
      autoplay: 1,
    },
  }
  const optsLG: YouTubeProps['opts'] = {
    width: '640',
    height: '360',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <section
      id='home'
      className='flex md:flex-row gap-14   px-10 py-32 items-center justify-center flex-col '
    >
      <div
        className='flex
       flex-col gap-4 pl-5 items-start justify-center'
      >
        <div>
          <h1 className='font-extrabold text-white lg:text-6xl text-4xl '>
            Finson <span className='text-primary'>Coutinho</span>
          </h1>
          <p className='text-white '>Coding the Future, One Line at a Time</p>
        </div>
        <div className=' flex gap-4 mt-4'>
          <CustomButton url='mailto:finsoncoutinho2125@gmail.com'>
            <Mail />
            <span className='ml-2'>Contact me</span>
          </CustomButton>
          <CustomButton
            url='https://github.com/finsoncoutinho'
            classname='bg-transparent text-white hover:bg-white hover:text-accent '
          >
            <Github />
            <span className='ml-2'>Github</span>
          </CustomButton>
        </div>
      </div>
      <div className='hidden lg:block '>
        <VideoPlayer videoID='xvq7KfY1wCU' options={optsLG} />
      </div>
      <div className='hidden md:block lg:hidden'>
        <VideoPlayer videoID='xvq7KfY1wCU' options={optsMD} />
      </div>
      <div className=' md:hidden'>
        <VideoPlayer videoID='xvq7KfY1wCU' options={optsSM} />
      </div>
    </section>
  )
}

export default HeroSection

'use client'
import YouTube, { YouTubeProps } from 'react-youtube'
import { Button } from './ui/button'
import { Mail, Github } from 'lucide-react'
const HeroSection = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
  const optsSM: YouTubeProps['opts'] = {
    width: '300',
    height: '169',
    playerVars: {
      autoplay: 1,
    },
  }
  const optsMD: YouTubeProps['opts'] = {
    width: '500',
    height: '281',
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
  const handleContactMe = () => {
    window.location.href = 'mailto:finsoncoutinho2125@gmail.com'
  }

  const handleGithub = () => {
    window.location.href = 'https://github.com/finsoncoutinho'
  }

  return (
    <section className='flex md:flex-row gap-14   px-10 py-32 items-center justify-center flex-col '>
      <div
        className='flex
       flex-col gap-4 pl-5 items-start justify-center'
      >
        <div>
          <h1 className='font-extrabold text-white lg:text-6xl text-3xl '>
            Finson <span className='text-primary'>Coutinho</span>
          </h1>
          <p className='text-white '>Coding the Future, One Line at a Time</p>
        </div>
        <div className=' flex gap-4 mt-4'>
          <Button onClick={handleContactMe}>
            <Mail />
            <span className='ml-2'>Contact me</span>
          </Button>
          <Button
            onClick={handleGithub}
            className='bg-transparent text-white hover:bg-white hover:text-accent '
          >
            <Github />
            <span className='ml-2'>Github</span>
          </Button>
        </div>
      </div>
      <div className='hidden lg:block '>
        <YouTube videoId='2g811Eo7K8U' opts={optsLG} onReady={onPlayerReady} />
      </div>
      <div className='hidden md:block lg:hidden'>
        <YouTube videoId='2g811Eo7K8U' opts={optsMD} onReady={onPlayerReady} />
      </div>
      <div className=' md:hidden'>
        <YouTube videoId='2g811Eo7K8U' opts={optsSM} onReady={onPlayerReady} />
      </div>
    </section>
  )
}

export default HeroSection

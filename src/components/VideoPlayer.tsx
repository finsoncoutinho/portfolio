'use client'
import YouTube, { YouTubeProps } from 'react-youtube'

const VideoPlayer = ({
  options,
  videoID,
}: {
  options: YouTubeProps['opts']
  videoID: string
}) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
  return <YouTube videoId={videoID} opts={options} onReady={onPlayerReady} />
}

export default VideoPlayer

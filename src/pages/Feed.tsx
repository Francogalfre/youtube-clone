import { useContext } from 'react'

// Content
import { AppContext } from '../context/ApiContext'

// Types
import type { Video, Videos } from '../types/videos'

const Feed = () => {
  const { videos }: Videos = useContext(AppContext)

  return (
    <div>
    <h1>Hello World</h1>
    {videos.map(({ video }: Video) => (
      <div key={video.videoId}>
        <img
          className='w-30 h-30 rounded-xl'
          src={
            video?.thumbnails?.[1]?.url
              ? video?.thumbnails?.[1]?.url
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSimzQZZ8F6G5ANQfTH3Lt6xhKwaibOCG60RA8jZa_zDkLsiGxo5sYx5CgBfhzWdNTw4g&usqp=CAU"
          }
          alt={`Thumbnail of ${video.title}`}
        />
        <span>{video.title}</span>
      </div>
    ))}
  </div>
  )
}

export default Feed
// Context
import { useContext } from "react"
import { AppContext } from "./context/ApiContext"

// Types
import type { Videos, Video } from "./types/videos"

function App() {
	const { videos }: Videos = useContext(AppContext)
	console.log(videos)

	return (
		<div>
			<h1>Hello World</h1>
			{videos.map((video: Video) => console.log(video.video.thumbnails[1].url))}
		</div>
	)
}

export default App

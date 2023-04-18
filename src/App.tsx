// Context
import { useContext } from "react"
import { AppContext } from "./context/ApiContext"

function App() {
	const { videos } = useContext(AppContext)
	console.log(videos)

	return (
		<div>
			<h1>Hello World</h1>
		</div>
	)
}

export default App

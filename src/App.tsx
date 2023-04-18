import useFetchData from "./hooks/useFetchData"

function App() {
	const { data } = useFetchData()
	console.log(data)

	return (
		<div>
			<h1>Hello World</h1>c
		</div>
	)
}

export default App

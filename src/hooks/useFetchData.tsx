import { useState, useEffect } from "react"

// Axios
import axios from "axios"

interface Options {
	method: string
	url: string
	params: { q: string; hl: string; gl: string }
	headers: {
		"X-RapidAPI-Key": any
		"X-RapidAPI-Host": string
	}
}

const useFetchData = (options: Options) => {
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		axios
			.request(options)
			.then((res) => {
				setLoading(true)
				setData(res.data)
			})
			.catch((err) => {
				console.error(err)
			})

		setLoading(false)
	}, [options])

	return { data, loading }
}

export default useFetchData

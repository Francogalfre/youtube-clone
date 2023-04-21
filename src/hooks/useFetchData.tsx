import { useState, useEffect } from "react"

// Axios
import axios from "axios"

// Types
import type { Videos } from "../types/videos"
import type { Options } from "../types/api"

const useFetchData = (options: Options) => {
	const [data, setData] = useState<Videos>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		axios
			.request(options)
			.then((res) => {
				setLoading(true)
				setData(res.data.contents)
			})
			.catch((err) => {
				console.error(err)
			})

		setLoading(false)
	}, [])

	return { data, loading }
}

export default useFetchData

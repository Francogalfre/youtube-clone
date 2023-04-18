import { useState, useEffect } from "react"

// Axios
import axios from "axios"

// Options for API Fetch
import { options } from "../utils/apiOptions"

const useFetchData = () => {
	const [data, setData] = useState({})

	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				setData(response.data)
			})
			.catch(function (error) {
				console.error(error)
			})
	}, [])

	return { data }
}

export default useFetchData

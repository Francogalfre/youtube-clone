import axios from "axios"

const BASE_URL = "https://youtube138.p.rapidapi.com/auto-complete/"

const options = {
	method: "GET",
	params: { hl: "en", gl: "US" },
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	},
}

const fetchData = async (url: string) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options)

	return data
}

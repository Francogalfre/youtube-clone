export const options = {
	method: "GET",
	url: "https://youtube138.p.rapidapi.com/search/",
	params: { q: "despacito", hl: "en", gl: "US" },
	headers: {
		"X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	},
}

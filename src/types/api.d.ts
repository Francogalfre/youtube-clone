export interface Options {
	method: string
	url: string
	params: { q: string; hl: string; gl: string }
	headers: {
		"X-RapidAPI-Key": any
		"X-RapidAPI-Host": string
	}
}

import { createContext, useState } from "react"

// Hooks
import useFetchData from "../hooks/useFetchData"

type Props = {
	children: React.ReactNode
}

export const AppContext = createContext({})

export const AppContextProvider = ({ children }: Props) => {
	const [selectCategories, setSelectCategories] = useState("lofi")
	const [mobileMenu, setMobileMenu] = useState("")

	const options = {
		method: "GET",
		url: "https://youtube138.p.rapidapi.com/search/",
		params: { q: `${ selectCategories }`, hl: "en", gl: "US" },
		headers: {
			"X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
			"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
		},
	}

	const { data } = useFetchData(options)

	return (
		<AppContext.Provider
			value={{
				videos: data,
				selectCategories,
				mobileMenu,
				setSelectCategories,
				setMobileMenu,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

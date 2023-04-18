import { createContext, useState, useEffect } from "react"

// Hooks
import useFetchData from "../hooks/useFetchData"

export const Context = createContext()

export const AppContext = (props) => {
	const [searchResults, setSearchResults] = useState("")
	const [selectCategories, setSelectCategories] = useState("")
	const [mobileMenu, setMobileMenu] = useState("")
}

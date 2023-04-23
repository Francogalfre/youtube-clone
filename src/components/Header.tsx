import React, { useContext, useState } from "react"

// Context
import { AppContext } from "../context/ApiContext"

// Navigation
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom"

// Images
import YTLogo from "../assets/images/yt-logo.png"
import YTLogoMobile from "../assets/images/yt-logo-mobile.png"

// Icons
import { SlMenu } from "react-icons/sl"
import { IoIosSearch } from "react-icons/io"
import { RiVideoAddLine } from "react-icons/ri"
import { FiBell } from "react-icons/fi"
import { CgClose } from "react-icons/cg"

// Components
import Loader from "./Loader"

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("")
	const { mobileMenu, setMobileMenu, loading } = useContext(AppContext)
	
	const { pathname } = useLocation()
	const navigate = useNavigate() 

	const searchQueryHandler = (e: any) => {
		if (
			(e?.key === "Enter" || e === "SearchButton") &&
			searchQuery?.length > 0 &&
			location.pathname !== `/search/${searchQuery}`
		) {
			navigate(`/search/${searchQuery}`)
		} 
	}

	const mobileMenuToogle = () => {
		setMobileMenu(!mobileMenu)
	}

	const pageName = pathname?.split("/")?.filter(Boolean)?.[0] 

	return (
		<div 
			className="sticky top-0 z-10 flex flex-row items-center justify-start h-14 px-8 bg-white dark:bg-black"
		>
			{ loading && <Loader /> }

			<div className="flex h-5 items-center">
				{pageName !== "video" && (
						<div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-9 w-9 rounded-full hover:bg-[#303030]/[0.6] transition-colors mr-3" onClick={mobileMenuToogle}>
							{
								mobileMenu ? (
									<CgClose className="text-xl text-white" />
								) : (
									<SlMenu className="text-xl text-white" />
								)
							}
						</div>
					)
				}
				
				
			</div>

			<Link to={"/"} className="flex h-5 items-center">
				<img className="h-full hidden dark:md:block cursor-pointer" src={YTLogo} alt="Logo of Youtube" />
				<img className="h-full md:hidden cursor-pointer" src={YTLogoMobile} alt="Logo of Youtube" />
			</Link>

			<div className="group flex items-center">
				<div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl rounded-r-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0" >
					<div className="w-10 items-center justify-center hidden group-focus-within:md:flex" >
						<IoIosSearch className="text-white text-xl" />
					</div>
					<input
						className="flex-grow h-full w-full px-2 text-sm text-black dark:text-white bg-transparent outline-none"
						type="text"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyDown={(e) => searchQueryHandler(e)}
					/>
					<div 
						className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] bg-white/[0.1] rounded-r-3xl cursor-pointer" 
						onClick={() => searchQueryHandler("SearchButton")}>
						<IoIosSearch className="text-white text-xl" />
					</div>
				</div>
			</div>

		</div>
	)
}

export default Header

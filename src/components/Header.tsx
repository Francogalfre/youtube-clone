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
	return (
		<div>
			Header
			<Loader />
			<Outlet />
		</div>
	)
}

export default Header

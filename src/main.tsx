import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// React Router
import { RouterProvider } from "react-router-dom"
import { router }  from "./utils/router"

// Context
import { AppContextProvider } from "./context/ApiContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppContextProvider>
			<RouterProvider router={router} />
		</AppContextProvider>
	</React.StrictMode>
)

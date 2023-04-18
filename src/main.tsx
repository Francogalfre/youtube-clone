import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// Context
import { AppContextProvider } from "./context/ApiContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import BookList from './components/BookList.jsx'
import MyList from './components/MyList.jsx'

// Använd HASH ROUTER här
const router = createHashRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: BookList
			},
			{
				path: "/my-list",
				Component: MyList
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)

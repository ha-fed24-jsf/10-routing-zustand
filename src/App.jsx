import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import MyList from './components/MyList'
import { NavLink, Outlet } from 'react-router'

function App() {

	return (
		<div className="app">
			<header>
				<NavLink to="/">
					<h1> Läslistan </h1>
				</NavLink>
				<NavLink to="/my-list">
					<p> 1 bok </p>
				</NavLink>
			</header>

			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default App

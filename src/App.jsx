import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import MyList from './components/MyList'
import { NavLink, Outlet } from 'react-router'
import { useBookStore } from './data/bookStore'

function App() {
	const myList = useBookStore(state => state.myList)
	const count = myList.length
	// TODO: använd CONDITIONAL RENDERING för att ändra vad som visas: inga böcker, 1 bok, 2 böcker osv.
	let countText = `${count} böcker`
	if( count === 0 ) {
		countText = 'Inga böcker'
	} else if( count === 1 ) {
		countText = '1 bok'
	}

	return (
		<div className="app">
			<header>
				<NavLink to="/">
					<h1> Läslistan </h1>
				</NavLink>
				<NavLink to="/my-list">
					<p> {countText} </p>
				</NavLink>
			</header>

			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

	return (
		<div className="app">
			<header>
				<h1> Läslistan </h1>
				<p> <a href="">1 bok</a> </p>
			</header>

			<div>
				<main className="author-books">
					<nav>
						<ul>
							<li> <a href=""> Jane Austen </a> </li>
							<li> Terry Pratchett </li>
							<li> Astrid Lindgren </li>
						</ul>
					</nav>
					<article>
						Här är några böcker som Jane Austen har skrivit:
						<ul>
							<li> Pride and Prejudice
								<button> Lägg till </button>
							</li>
							<li> Karlsson på taket (redan i listan) </li>
						</ul>
					</article>
				</main>
				
				<main className="my-list">
					<h2> Min lista </h2>
					<ul>
						<li>
							Karlsson på taket 
							<button> Ta bort </button>
						</li>
					</ul>
				</main>
			</div>
		</div>
	)
}

export default App

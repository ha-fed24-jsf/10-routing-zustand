import { useBookStore } from "../data/bookStore"

const MyList = () => {
	const myList = useBookStore(state => state.myList)
	const removeFromMyList = useBookStore(state => state.removeFromMyList)

	return (
		<main className="my-list">
			<h2> Min lista </h2>
			<ul>
				{myList.map(book => (
					<li key={book.id}>
						{book.title} av {book.author}
						<button onClick={() => removeFromMyList(book.id)}> Ta bort </button>
					</li>
				))}
				{/* <li>
					Karlsson på taket 
					<button> Ta bort </button>
				</li> */}
			</ul>
		</main>
	)
}
export default MyList

import { useBookStore } from "../data/bookStore"


const BookList = () => {
	const books = useBookStore(state => state.books)
	const addToMyList = useBookStore(state => state.addToMyList)

	return (
		<main className="author-books">
		<nav>
			<ul>
				<li> <a href=""> Jane Austen </a> </li>
				<li> Terry Pratchett </li>
				<li> Astrid Lindgren </li>
			</ul>
		</nav>
		<article>
			Här är några böcker:
			<ul>
				{books.map(book => (
					<li key={book.id}>
						{book.title}
						<button onClick={() => addToMyList(book)}> Lägg till </button>
					</li>
				))}
				{/* <li> Pride and Prejudice
					<button> Lägg till </button>
				</li>
				<li> Karlsson på taket (redan i listan) </li> */}
			</ul>
		</article>
	</main>
	)
}
export default BookList

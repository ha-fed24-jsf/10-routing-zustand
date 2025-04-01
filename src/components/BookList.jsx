

const BookList = () => {

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
			Här är några böcker som Jane Austen har skrivit:
			<ul>
				<li> Pride and Prejudice
					<button> Lägg till </button>
				</li>
				<li> Karlsson på taket (redan i listan) </li>
			</ul>
		</article>
	</main>
	)
}
export default BookList

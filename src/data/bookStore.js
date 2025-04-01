// Vanligtvis hämtar vi datan från ett API
const bookData = [
	{ id: 1, author: "J.K. Rowling", title: "Harry Potter and the Sorcerer's Stone" },
	{ id: 2, author: "J.K. Rowling", title: "Harry Potter and the Chamber of Secrets" },
	{ id: 3, author: "J.K. Rowling", title: "Harry Potter and the Prisoner of Azkaban" },
	{ id: 4, author: "J.R.R. Tolkien", title: "The Hobbit" },
	{ id: 5, author: "J.R.R. Tolkien", title: "The Fellowship of the Ring" },
	{ id: 6, author: "J.R.R. Tolkien", title: "The Two Towers" },
	{ id: 7, author: "George R.R. Martin", title: "A Game of Thrones" },
	{ id: 8, author: "George R.R. Martin", title: "A Clash of Kings" },
	{ id: 9, author: "George R.R. Martin", title: "A Storm of Swords" }
  ];

  import { create } from 'zustand'

  const useBookStore = create((set) => ({
	books: bookData,
	myList: [],

	addToMyList: book => set(state => ({
		myList: [ ...state.myList, book ]
	}))

	// TODO: funktioner för att ändra listan
	
	// bears: 0,
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 }),
  }))
  export { useBookStore }

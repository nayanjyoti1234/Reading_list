import React ,{ useReducer, createContext, useEffect} from 'react';
import {bookReducer} from '../reducer/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

	const [books, dispatch] = useReducer(bookReducer, [] , ()=>{
		let localValue = localStorage.getItem('books');
		return localValue ? JSON.parse(localValue) : [];
	})

	useEffect (() => {
		localStorage.setItem('books',JSON.stringify(books));
	},[books])


	return (
		<BookContext.Provider value={{books ,dispatch}}>
			{props.children}
		</BookContext.Provider>
		);
}

export default BookContextProvider;

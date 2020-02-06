import React, { useContext} from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../context/BookContext';

const BookList = () => {

	const {books} = useContext(BookContext);

	return books.length ? (
		<div className='book-list'>
			<ul>
				{ 
				books.map(book => {
				return (<BookDetails book={book}/>)
				})}
			</ul>
		</div>
		):(
			<div className='empty'>no books to read</div>
			)
}

export default BookList;

import React, { useState, useContext} from 'react';
import {BookContext} from '../context/BookContext';

const BookForm = () => {

	const {dispatch}         = useContext(BookContext);
	const [title,setTitle]   = useState('');
	const [author,setAuthor] = useState('');
	const [id,setId]         = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch({type: 'ADD_BOOK' , book:{
			title,author,id
		}})

		setTitle('');
		setAuthor('');
		setId('');
	}

	return (
		<form onSubmit= {submitHandler}>
			<input type='text' placeholder='enter book name' value={title} onChange={(e) => setTitle(e.target.value)}/>
			<input type='text' placeholder='enter author name' value={author} onChange={(e) => setAuthor(e.target.value)}/>
			<input type='text' placeholder='enter unique number' value={id} onChange={(e) => setId(e.target.value)}/>
			<input type='submit'/>
		</form>
		);
}

export default BookForm;

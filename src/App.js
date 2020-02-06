import React, {Component} from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookContextProvider from './context/BookContext';

class App extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<div className='App'>
				<BookContextProvider>
					<Navbar/>
					<BookList/>
					<BookForm/>
				</BookContextProvider>
			</div>
			);
	}
}

export default App;

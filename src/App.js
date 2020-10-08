import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className="grid">
			<Header />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

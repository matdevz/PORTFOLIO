import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation/index';
import About from './components/About/index';
import Experience from './components/Experience/index';
import Services from './components/Services/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index';
import Testimonials from './components/Testimonials/index';
import Footer from './components/Footer/index';

const App: React.FC = () => {
	return (
		<>
			<h1>Hello</h1>
			<Header />
			<Navigation />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default App;

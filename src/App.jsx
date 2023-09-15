import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App

import Gallery from '../components/Gallery'
import HomeService from '../components/HomeService'
import Landing from '../components/Landing'
import Why from '../components/Why'

const Home = () => {
	return (
		<div>
			<Landing />
			<HomeService />
			<Why />
			<Gallery />
		</div>
	)
}

export default Home

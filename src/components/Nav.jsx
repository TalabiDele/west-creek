import logo from '../assets/imgs/Logo.png'
import { Link } from 'react-router-dom'
import Linking from './Linking'

const Nav = () => {
	return (
		<div>
			<div className=' flex w-[90vw] justify-between mx-auto absolute top-[2rem] left-0 right-0'>
				<Link to={'/'}>
					<img src={logo} alt='' className=' w-[12rem]' />
				</Link>
				<ul className=' flex font-medium w-[30rem] justify-between'>
					<li>
						<Linking link={'/about'} text={'About'} />
					</li>

					<li>
						<Linking link={'/services'} text={'Our Services'} />
					</li>

					<li>
						<Linking link={'/contact'} text={'Contact us'} />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav

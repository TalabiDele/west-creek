import logo from '../assets/imgs/Logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div>
			<div className=' flex w-[90vw] justify-between mx-auto absolute top-[2rem] left-0 right-0'>
				<Link to={'/'}>
					<img src={logo} alt='' className=' w-[12rem]' />
				</Link>
				<ul className=' flex font-medium w-[30rem] justify-between'>
					<Link
						to={'/about'}
						className='text-white hover:text-primary duration-300 ease-in-out transition-all'
					>
						<li className=''>About</li>
					</Link>
					<Link
						to={'/services'}
						className='text-white hover:text-primary duration-300 ease-in-out transition-all'
					>
						<li className=''>Our Services</li>
					</Link>
					<Link
						to={'/contact'}
						className='text-white hover:text-primary duration-300 ease-in-out transition-all'
					>
						<li className=''>Contact us</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default Nav

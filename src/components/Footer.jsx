import logo from '../assets/imgs/Logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Linking from './Linking'

const Footer = () => {
	return (
		<div className=' bg-secondary bg-background py-[4rem] bg-cover bg-center bg-blend-overlay'>
			<div className=' w-[90vw] mx-auto flex justify-between'>
				<div className=' w-[20rem]'>
					<img src={logo} alt='' className=' w-[15rem] mb-[1rem]' />
					<p className=' text-sm text-text_primary'>
						We are not your typical IT consulting firm; we&apos;re the silent
						architects of digital excellence, working behind the scenes to bring
						your most ambitious tech dreams to life.
					</p>
				</div>

				<div className=' flex flex-col text-text_primary font-medium h-[7rem] justify-between'>
					<Linking link={'/about'} text={'About'} />
					<Linking link={'/services'} text={'Our Services'} />
					<Linking link={'/contact'} text={'Contact us'} />
				</div>

				<div className=' text-white text-2xl flex justify-between w-[10rem]'>
					<div className='rounded-full h-[2rem] w-[2rem] bg-primary flex justify-center items-center transition-all duration-200 ease-in-out hover:text-primary hover:bg-white cursor-pointer p-[0.5rem]'>
						<FaFacebookF />
					</div>
					<div className='rounded-full h-[2rem] w-[2rem] bg-primary flex justify-center items-center transition-all duration-200 ease-in-out hover:text-primary hover:bg-white cursor-pointer p-[0.5rem]'>
						<FaTwitter />
					</div>
					<div className='rounded-full h-[2rem] w-[2rem] bg-primary flex justify-center items-center transition-all duration-200 ease-in-out hover:text-primary hover:bg-white cursor-pointer p-[0.5rem]'>
						<FaInstagram />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

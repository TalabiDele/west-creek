import logo from '../assets/imgs/Logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Linking from './Linking'
import { motion } from 'framer-motion'

const Footer = () => {
	return (
		<div className=' bg-secondary bg-background py-[4rem] bg-cover bg-center bg-blend-overlay overflow-y-hidden'>
			<motion.div
				initial={{ opacity: 0, scale: 0, x: 100 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				className=' w-[90vw] mx-auto flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:h-[25rem]'
			>
				<div className=' w-[20rem]'>
					<img
						src={logo}
						alt=''
						className=' w-[15rem] mb-[1rem] max-md:mx-auto max-md:mb-[3rem]'
					/>
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
			</motion.div>
		</div>
	)
}

export default Footer

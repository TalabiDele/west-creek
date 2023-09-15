import Headers from './Headers'
import Map from './Map'
import { motion } from 'framer-motion'

const ContactUs = () => {
	return (
		<div className=' bg-cover bg-center py-[4rem] overflow-x-hidden'>
			<motion.div
				initial={{ opacity: 0, scale: 0, x: 100 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				className=' w-[60vw] mx-auto flex items-center justify-between max-md:flex-col max-md:items-center'
			>
				<div className=' w-[30vw] max-md:w-[80vw] max-sm:w-[90vw]'>
					<Headers text={'Get in Touch'} />
					<div className=' '>
						<div className=' text-secondary mb-[2rem]'>
							<h1 className=' text-2xl font-bold'>Phone</h1>
							<ul className=' text-sm'>
								<li>(234)80 9143 2359</li>
								<li>(234)70 8551 1861</li>
							</ul>
						</div>
						<div className=' text-secondary mb-[2rem]'>
							<h1 className=' text-2xl font-bold '>Email</h1>
							<ul className=' text-sm'>
								<li>info@westcreekresourceslimited.org</li>
							</ul>
						</div>
						<div className=' text-secondary mb-[2rem]'>
							<h1 className=' text-2xl font-bold'>Address</h1>
							<ul className=' text-sm'>
								<li>
									Plot 5 and 6, Liatris CLose, Peninsula Garden Estate, Lekki,
									Lagos
								</li>
							</ul>
						</div>
					</div>
				</div>

				<Map />
			</motion.div>
		</div>
	)
}

export default ContactUs

import Headers from './Headers'
import about from '../assets/imgs/about-1.png'
import app from '../assets/imgs/about-2.png'
import { motion } from 'framer-motion'

const AboutUs = () => {
	return (
		<div className='px-[3rem] mx-auto py-[5rem] bg-cover bg-center bg-opacity-30 overflow-y-hidden'>
			<div className=' flex justify-between items-center mb-[4rem] max-md:flex-col-reverse'>
				<motion.div
					initial={{ opacity: 0, scale: 0, x: 100 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					className=' w-[40vw] p-[3rem] relative max-md:w-[90vw] max-md:text-center max-sm:w-full max-md:p-[1rem]'
				>
					<Headers text={'Our Story'} />
					<p className=' text-text_secondary text-sm '>
						Established in 2017 with RC - 1395185, West Creek Resource was born
						from the desire to craft a different narrative in the world of IT
						consulting. Our founders saw an opportunity to merge the worlds of
						privacy and online presence, and thus, our journey began.
					</p>

					{/* <div className='absolute top-[2rem] left-0 opacity-30 flex items-center'>
						<img src={bg} alt='' className='  object-cover object-center' />
					</div> */}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0, x: -100 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					className=' border-2 p-[0.5rem] border-primary rounded-lg'
				>
					<img
						src={about}
						alt=''
						loading='lazy'
						className=' w-[40vw] rounded-lg max-md:w-[70vw]'
					/>
				</motion.div>
			</div>
			<div className=' flex justify-between items-center max-md:flex-col'>
				<motion.div
					initial={{ opacity: 0, scale: 0, x: 100 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					className=' border-2 p-[0.5rem] border-primary rounded-lg'
				>
					<img
						src={app}
						alt=''
						loading='lazy'
						className=' w-[40vw] rounded-lg max-md:w-[70vw]'
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0, x: -100 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					className=' w-[40vw] p-[3rem] relative max-md:w-[80vw] max-md:text-center max-sm:w-full max-md:p-[1rem]'
				>
					<Headers text={'Our Approach'} />
					<p className=' text-text_secondary text-sm'>
						We believe that excellence doesn&apos;t always have to shout. We
						specialize in discreet IT projects that are carefully engineered to
						elevate your digital capabilities without drawing unnecessary
						attention. Our clients trust us with their most confidential
						projects because we understand the value of secrecy.
					</p>

					{/* <div className='absolute top-[2rem] left-0 opacity-30 flex items-center'>
						<img src={bg} alt='' className='  object-cover object-center' />
					</div> */}
				</motion.div>
			</div>
		</div>
	)
}

export default AboutUs

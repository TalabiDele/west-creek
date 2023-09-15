import Headers from './Headers'
import one from '../assets/imgs/g-1.png'
import two from '../assets/imgs/g-2.png'
import three from '../assets/imgs/g-3.png'
import { motion } from 'framer-motion'

const Gallery = () => {
	return (
		<div className=' w-[90vw] mx-auto my-[4rem]'>
			<Headers text={'Gallery'} />

			<motion.div
				initial={{ opacity: 0, scale: 0, x: 100 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				className='grid grid-cols-3 max-sm:grid-cols-1 max-sm:justify-items-center'
			>
				<img src={one} alt='' className='max-sm:mb-[1rem]' />
				<img src={two} alt='' className='max-sm:mb-[1rem]' />
				<img src={three} alt='' className='max-sm:mb-[1rem]' />
			</motion.div>
		</div>
	)
}

export default Gallery

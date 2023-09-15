/* eslint-disable react/prop-types */
import Line from './Line'
import { motion } from 'framer-motion'

const Headers = ({ text }) => {
	return (
		<motion.div

		// viewport={{ once: true }}
		>
			<motion.div
				className=' flex items-center mb-[2rem] max-sm:justify-center'
				initial={{ opacity: 0, scale: 0, x: 100 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				viewport={true}
			>
				<Line />
				<h1 className='text-primary font-bold text-xl max-sm:text-lg'>
					{text}
				</h1>
			</motion.div>
		</motion.div>
	)
}

export default Headers

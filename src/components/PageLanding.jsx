import { motion } from 'framer-motion'

/* eslint-disable react/prop-types */
const PageLanding = ({ header, paragraph }) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerDirection: -1,
			},
		},
	}

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='show'
			className=' bg-about_bg bg-cover bg-center py-[5rem]'
		>
			<div className=' grid justify-items-center'>
				<motion.h1
					variants={item}
					size={50}
					className=' text-primary font-bold text-7xl mb-[1rem] max-md:text-5xl'
				>
					{header}
				</motion.h1>
				<motion.div
					variants={item}
					size={50}
					className='h-[0.2rem] w-[5rem] bg-white mb-[2rem]'
				></motion.div>
				<motion.p
					variants={item}
					size={50}
					className=' text-text_primary w-[60vw] text-center text-sm max-md:w-[80vw] max-sm:w-[90vw]'
				>
					{paragraph}
				</motion.p>
			</div>
		</motion.div>
	)
}

export default PageLanding

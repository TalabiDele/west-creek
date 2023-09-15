import image from '../assets/imgs/landing-img.png'
import Buttons from './Buttons'
import { motion } from 'framer-motion'

const Landing = () => {
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
			className=' bg-secondary bg-background bg-blend-overlay h-[100vh] bg-cover bg-center flex items-end '
		>
			<motion.div
				variants={item}
				size={50}
				className=' flex items-center justify-between w-[90vw] mx-auto max-md:flex-col max-sm:w-[95vw] '
			>
				<motion.div
					variants={item}
					size={50}
					className=' w-[50vw] max-md:text-center max-md:grid max-md:justify-items-center max-md:w-[80vw] max-sm:w-[90vw]'
				>
					<motion.h1
						variants={item}
						size={50}
						className=' text-white font-bold text-7xl mb-[1rem] max-lg:text-5xl max-md:text-4xl max-sm:text-2xl'
					>
						Where <span className=' text-primary'>Innovation</span> Meets{' '}
						<span className='text-primary'>Expertise</span>
					</motion.h1>
					<motion.p
						variants={item}
						size={50}
						className=' text-text_primary w-[80%] mb-[1rem] max-lg:w-full max-md:text-sm'
					>
						We specialize in empowering businesses to navigate the ever-evolving
						digital landscape. With a passion for innovation and a commitment to
						excellence, our team of seasoned IT experts is here to drive your
						organization&apos;s success.
					</motion.p>
					<motion.div variants={item} size={50} className=' mb-[2rem]'>
						<Buttons type={'primary'} btnText={'Get Started'} />
					</motion.div>
				</motion.div>

				<motion.div variants={item} size={50} className=''>
					<img src={image} alt='' className=' w-[30rem] max-md:w-[15rem]' />
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default Landing

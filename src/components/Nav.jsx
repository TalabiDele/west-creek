import logo from '../assets/imgs/Logo.png'
import { Link } from 'react-router-dom'
import Linking from './Linking'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)
	const [isResize, setIsResize] = useState(false)

	const NavAnimation = {
		initial: {
			y: -10,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
		exit: {
			y: -10,
			opacity: 0,
		},
	}

	const handleScroll = () => {
		if (window.scrollY >= 20 && !isOpen) {
			setIsScrolling(true)
		} else {
			setIsScrolling(false)
		}
	}

	const handleResize = () => {
		if (window.innerWidth > 768) {
			setIsResize(true)
			console.log('resize')
		} else {
			setIsResize(false)
		}
	}

	useEffect(() => {
		if (window.innerWidth > 768) {
			setIsResize(true)
			console.log('resize')
		} else {
			setIsResize(false)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<AnimatePresence>
			{isScrolling ? (
				<motion.div
					key={1}
					initial='initial'
					variants={NavAnimation}
					animate='animate'
					exit='exit'
					className='bg-secondary fixed top-0 w-[100vw] py-[1rem] z-[2]'
				>
					<div
						className={`${
							isOpen && 'no-scrollbar'
						} flex w-[90vw] justify-between mx-auto top-[2rem] left-0 right-0 `}
					>
						<Link to={'/'}>
							<img src={logo} alt='' className=' w-[12rem]' />
						</Link>
						<motion.div
							className={` hidden max-md:block cursor-pointer fixed z-[4] right-[1rem] ${
								isOpen ? 'fixed' : 'relative'
							}`}
							// onClick={() => console.log('working')}
							onTap={() => setIsOpen(!isOpen)}
							animate={
								isOpen
									? {
											y: 10,
									  }
									: {
											y: 0,
									  }
							}
							transition={{ duration: 0.1, staggerDirection: -1 }}
						>
							<motion.div
								animate={
									isOpen
										? {
												rotate: 45,
										  }
										: {
												rotate: 0,
										  }
								}
								transition={{ duration: 0.1, staggerDirection: -1 }}
								className={` h-[0.2rem] w-[2rem] rounded-lg bg-white mb-[0.5rem]`}
							></motion.div>
							<motion.div
								animate={
									isOpen
										? {
												rotate: -45,
												y: -10,
										  }
										: {
												rotate: 0,
												y: 0,
										  }
								}
								transition={{ duration: 0.1, staggerDirection: -1 }}
								className={` h-[0.2rem] w-[2rem] rounded-lg bg-white mb-[0.5rem]`}
							></motion.div>
							<motion.div
								animate={
									isOpen
										? {
												scale: 0,
												rotate: 180,
										  }
										: {
												scale: 1,
										  }
								}
								transition={{ duration: 0.1, staggerDirection: -1 }}
								className={` h-[0.2rem] w-[2rem] rounded-lg bg-white`}
							></motion.div>
						</motion.div>
						{isResize ? (
							<ul
								className={`flex font-medium w-[30rem] justify-between max-lg:w-[20rem] `}
							>
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
						) : (
							<motion.ul
								animate={
									isOpen
										? {
												scale: 1,
										  }
										: {
												scale: 0,
										  }
								}
								className={`${
									isOpen
										? 'max-md:flex max-md:flex-col max-md:bg-secondary fixed max-md:z-[3] max-md:h-[100vh] max-md:w-[100vw] max-md:top-0 max-md:left-0 max-md:justify-center max-md:text-2xl max-md:items-center'
										: 'max-md:hidden'
								} flex font-medium w-[30rem] justify-between max-lg:w-[20rem] `}
							>
								<li className=' mb-[4rem]'>
									<Linking link={'/about'} text={'About'} />
								</li>

								<li className=' mb-[4rem]'>
									<Linking link={'/services'} text={'Our Services'} />
								</li>

								<li className=' mb-[4rem]'>
									<Linking link={'/contact'} text={'Contact us'} />
								</li>
							</motion.ul>
						)}
					</div>
				</motion.div>
			) : (
				<motion.div
					key={2}
					initial='initial'
					variants={NavAnimation}
					animate='animate'
					exit='exit'
				>
					<div
						className={`${
							isOpen && 'no-scrollbar'
						} flex w-[90vw] justify-between mx-auto absolute top-[2rem] left-0 right-0 `}
					>
						<Link to={'/'}>
							<img src={logo} alt='' className=' w-[12rem]' />
						</Link>
						<motion.div
							className={` hidden max-md:block cursor-pointer fixed z-[4] right-[1rem] ${
								isOpen ? 'fixed' : 'relative'
							}`}
							// onClick={() => console.log('working')}
							onTap={() => setIsOpen(!isOpen)}
							animate={
								isOpen
									? {
											y: 10,
									  }
									: {
											y: 0,
									  }
							}
							transition={{ duration: 0.1, staggerDirection: -1 }}
						>
							<motion.div
								animate={
									isOpen
										? {
												rotate: 45,
										  }
										: {
												rotate: 0,
										  }
								}
								transition={{ duration: 0.1, staggerDirection: -1 }}
								className={` h-[0.2rem] w-[2rem] rounded-lg bg-white mb-[0.5rem]`}
							></motion.div>
							<motion.div
								animate={
									isOpen
										? {
												rotate: -45,
												y: -10,
										  }
										: {
												rotate: 0,
												y: 0,
										  }
								}
								transition={{ duration: 0.1, staggerDirection: -1 }}
								className={` h-[0.2rem] w-[2rem] rounded-lg bg-white mb-[0.5rem]`}
							></motion.div>
							<motion.div
								animate={
									isOpen
										? {
												scale: 0,
												rotate: 180,
										  }
										: {
												scale: 1,
										  }
								}
								transition={{ duration: 0.1, staggerDirection: -1 }}
								className={` h-[0.2rem] w-[2rem] rounded-lg bg-white`}
							></motion.div>
						</motion.div>
						{isResize ? (
							<ul
								className={` flex font-medium w-[30rem] justify-between max-lg:w-[20rem] max-md:hidden `}
							>
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
						) : (
							<motion.ul
								animate={
									isOpen
										? {
												scale: 1,
										  }
										: {
												scale: 0,
										  }
								}
								className={`${
									isOpen
										? 'max-md:flex max-md:flex-col max-md:bg-secondary fixed max-md:z-[3] max-md:h-[100vh] max-md:w-[100vw] max-md:top-0 max-md:left-0 max-md:justify-center max-md:text-2xl max-md:items-center'
										: 'max-md:hidden'
								} flex font-medium w-[30rem] justify-between max-lg:w-[20rem] `}
							>
								<li className=' max-md:mb-[4rem]'>
									<Linking link={'/about'} text={'About'} />
								</li>

								<li className=' max-md:mb-[4rem]'>
									<Linking link={'/services'} text={'Our Services'} />
								</li>

								<li className=' max-md:mb-[4rem]'>
									<Linking link={'/contact'} text={'Contact us'} />
								</li>
							</motion.ul>
						)}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Nav

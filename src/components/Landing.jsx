import image from '../assets/imgs/landing-img.png'
import Buttons from './Buttons'

const Landing = () => {
	return (
		<div className=' bg-secondary bg-background bg-blend-overlay h-[100vh] bg-cover bg-center flex items-end '>
			<div className=' flex items-center justify-between w-[90vw] mx-auto max-md:flex-col max-sm:w-[95vw] '>
				<div className=' w-[50vw] max-md:text-center max-md:grid max-md:justify-items-center max-md:w-[80vw] max-sm:w-[90vw]'>
					<h1 className=' text-white font-bold text-7xl mb-[1rem] max-lg:text-5xl max-md:text-4xl max-sm:text-2xl'>
						Where <span className=' text-primary'>Innovation</span> Meets{' '}
						<span className='text-primary'>Expertise</span>
					</h1>
					<p className=' text-text_primary w-[80%] mb-[1rem] max-lg:w-full max-md:text-sm'>
						We specialize in empowering businesses to navigate the ever-evolving
						digital landscape. With a passion for innovation and a commitment to
						excellence, our team of seasoned IT experts is here to drive your
						organization&apos;s success.
					</p>
					<div className=' mb-[2rem]'>
						<Buttons type={'primary'} btnText={'Get Started'} />
					</div>
				</div>

				<div className=''>
					<img src={image} alt='' className=' w-[30rem] max-md:w-[15rem]' />
				</div>
			</div>
		</div>
	)
}

export default Landing

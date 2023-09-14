import image from '../assets/imgs/landing-img.png'
import Buttons from './Buttons'

const Landing = () => {
	return (
		<div className=' bg-hero_bg w-[100vw] h-[100vh] bg-cover bg-center flex items-end'>
			<div className=' flex items-center justify-between w-[90vw] mx-auto'>
				<div className=' w-[50vw]'>
					<h1 className=' text-white font-bold text-7xl mb-[1rem]'>
						Where <span className=' text-primary'>Innovation</span> Meets{' '}
						<span className='text-primary'>Expertise</span>
					</h1>
					<p className=' text-text_primary w-[80%] mb-[1rem]'>
						We specialize in empowering businesses to navigate the ever-evolving
						digital landscape. With a passion for innovation and a commitment to
						excellence, our team of seasoned IT experts is here to drive your
						organization&apos;s success.
					</p>

					<Buttons type={'primary'} btnText={'Get Started'} />
				</div>

				<div className=''>
					<img src={image} alt='' className=' w-[30rem]' />
				</div>
			</div>
		</div>
	)
}

export default Landing

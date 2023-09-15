import Headers from './Headers'
import one from '../assets/imgs/g-1.png'
import two from '../assets/imgs/g-2.png'
import three from '../assets/imgs/g-3.png'

const Gallery = () => {
	return (
		<div className=' w-[90vw] mx-auto my-[4rem]'>
			<Headers text={'Gallery'} />

			<div className='grid grid-cols-3 max-sm:grid-cols-1'>
				<img src={one} alt='' className='max-sm:mb-[1rem]' />
				<img src={two} alt='' className='max-sm:mb-[1rem]' />
				<img src={three} alt='' className='max-sm:mb-[1rem]' />
			</div>
		</div>
	)
}

export default Gallery

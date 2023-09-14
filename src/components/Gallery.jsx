import Headers from './Headers'
import one from '../assets/imgs/g-1.png'
import two from '../assets/imgs/g-2.png'
import three from '../assets/imgs/g-3.png'

const Gallery = () => {
	return (
		<div className=' w-[90vw] mx-auto my-[4rem]'>
			<Headers text={'Gallery'} />

			<div className='grid grid-cols-3'>
				<img src={one} alt='' className='' />
				<img src={two} alt='' className='' />
				<img src={three} alt='' className='' />
			</div>
		</div>
	)
}

export default Gallery

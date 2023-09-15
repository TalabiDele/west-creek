/* eslint-disable react/prop-types */
import Line from './Line'

const Headers = ({ text }) => {
	return (
		<div>
			<div className=' flex items-center mb-[2rem] max-sm:justify-center'>
				<Line />
				<h1 className='text-primary font-bold text-xl max-sm:text-lg'>
					{text}
				</h1>
			</div>
		</div>
	)
}

export default Headers

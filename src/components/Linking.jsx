/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Linking = ({ text, link }) => {
	return (
		<div>
			<Link
				to={link}
				className='text-white hover:text-primary duration-300 ease-in-out transition-all'
			>
				{text}
			</Link>
		</div>
	)
}

export default Linking

/* eslint-disable react/prop-types */
import { BsArrowRight } from 'react-icons/bs'

const Buttons = ({ type, btnText }) => {
	return (
		<div>
			<button
				className={`${
					type === 'primary' &&
					'bg-white border border-1 border-white text-secondary hover:bg-transparent hover:text-white'
				} ${
					type === 'secondary' &&
					'bg-none border border-1 border-white text-white hover:border-transparent'
				} ${
					type === 'text' &&
					'text-primary hover:text-secondary border-transparent max-sm:text-sm'
				} ${
					type === 'other' &&
					'bg-secondary border-2 border-secondary text-white hover:bg-transparent hover:text-secondary hover:border-secondary '
				} rounded-full px-[1rem] py-[0.5rem] flex font-bold items-center transition-all duration-300 ease-in-out`}
			>
				{btnText} <BsArrowRight className=' text-xl font-bold ml-[0.5rem]' />
			</button>
		</div>
	)
}

export default Buttons

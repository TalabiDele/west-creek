/* eslint-disable react/prop-types */
const WhyCards = ({ header, text }) => {
	return (
		<div className=' w-[20rem] mb-[1rem] max-lg:w-[15rem] max-sm:text-center'>
			<h1 className=' text-white font-bold text-xl mb-[0.5rem]'>{header}</h1>
			<p className=' text-text_primary text-sm'>{text}</p>
		</div>
	)
}

export default WhyCards

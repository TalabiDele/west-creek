import Buttons from './Buttons'

/* eslint-disable react/prop-types */
const HomeServiceCards = ({ icon, header, paragraph, color }) => {
	return (
		<div>
			<div
				className={`${color} p-[1rem] text-white w-[20rem] h-[20rem] flex items-center bg-background bg-cover bg-center bg-blend-overlay max-lg:w-[15rem] max-md:mb-[1rem] max-sm:w-[90vw]`}
			>
				<div className='w-[90%] mx-auto flex flex-col justify-between h-[80%] max-lg:w-full max-lg:h-[90%]'>
					<div className=' text-4xl mb-[1rem]'>{icon}</div>
					<h1 className=' font-bold text-2xl mb-[1rem]'>{header}</h1>
					<p className=' mb-[1rem] text-text_primary text-sm'>{paragraph}</p>
					<Buttons btnText={'Read More'} type={'secondary'} />
				</div>
			</div>
		</div>
	)
}

export default HomeServiceCards

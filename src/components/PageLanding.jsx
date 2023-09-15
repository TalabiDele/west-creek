/* eslint-disable react/prop-types */
const PageLanding = ({ header, paragraph }) => {
	return (
		<div className=' bg-about_bg bg-cover bg-center py-[5rem]'>
			<div className=' grid justify-items-center'>
				<h1 className=' text-primary font-bold text-7xl mb-[1rem] max-md:text-5xl'>
					{header}
				</h1>
				<div className='h-[0.2rem] w-[5rem] bg-white mb-[2rem]'></div>
				<p className=' text-text_primary w-[60vw] text-center text-sm max-md:w-[80vw] max-sm:w-[90vw]'>
					{paragraph}
				</p>
			</div>
		</div>
	)
}

export default PageLanding

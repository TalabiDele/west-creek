import { BsDatabaseFillGear } from 'react-icons/bs'
import Buttons from './Buttons'
import HomeServiceCards from './HomeServiceCards'
import Headers from './Headers'
import { motion } from 'framer-motion'

const HomeService = () => {
	return (
		<div className=' w-[90vw] mx-auto my-[4rem] overflow-x-hidden overflow-y-hidden'>
			<Headers text={'Services'} />

			<motion.div
				initial={{ opacity: 0, scale: 0, x: 100 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				className=' flex items-center w-full justify-between mb-[2rem]'
			>
				<h1 className=' text-secondary font-bold text-2xl w-[30vw] max-md:w-[50vw] max-sm:text-lg max-sm:w-[]'>
					We Provide Tailored <span className='text-primary'>Solutions</span>{' '}
					For Your <span className='text-primary'>Business</span>
				</h1>
				<Buttons btnText={'All Services'} type={'text'} />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0, x: 100 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				transition={{ delay: 0.2 }}
				className='flex justify-between max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center'
			>
				<div className=''>
					<HomeServiceCards
						icon={<BsDatabaseFillGear className=' text-primary' />}
						header={'IT Strategy and Planning'}
						paragraph={
							'Craft a comprehensive IT strategy aligned with your business objectives.'
						}
						color={'bg-secondary'}
						delay={0.1}
					/>
				</div>
				<div className=''>
					<HomeServiceCards
						icon={<BsDatabaseFillGear className=' text-secondary' />}
						header={'Managed IT Services'}
						paragraph={
							'Proactive monitoring and maintenance of your IT systems.'
						}
						color={'bg-primary'}
						delay={0.2}
					/>
				</div>
				<div className=''>
					<div>
						<HomeServiceCards
							icon={<BsDatabaseFillGear className=' text-primary' />}
							header={'Cloud Solutions'}
							paragraph={
								'Migrate to the cloud for scalability and flexibility.'
							}
							color={'bg-secondary'}
							delay={0.3}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default HomeService

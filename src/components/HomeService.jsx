import { BsDatabaseFillGear } from 'react-icons/bs'
import Buttons from './Buttons'
import HomeServiceCards from './HomeServiceCards'
import Headers from './Headers'

const HomeService = () => {
	return (
		<div className=' w-[90vw] mx-auto my-[4rem]'>
			<Headers text={'Services'} />

			<div className=' flex items-center w-full justify-between mb-[2rem]'>
				<h1 className=' text-secondary font-bold text-2xl w-[30vw]'>
					We Provide Tailored <span className='text-primary'>Solutions</span>{' '}
					For Your <span className='text-primary'>Business</span>
				</h1>
				<Buttons btnText={'All Services'} type={'text'} />
			</div>

			<div className='flex justify-between'>
				<HomeServiceCards
					icon={<BsDatabaseFillGear className=' text-primary' />}
					header={'IT Strategy and Planning'}
					paragraph={
						'Craft a comprehensive IT strategy aligned with your business objectives.'
					}
					color={'bg-secondary'}
				/>
				<HomeServiceCards
					icon={<BsDatabaseFillGear className=' text-secondary' />}
					header={'Managed IT Services'}
					paragraph={'Proactive monitoring and maintenance of your IT systems.'}
					color={'bg-primary'}
				/>
				<HomeServiceCards
					icon={<BsDatabaseFillGear className=' text-primary' />}
					header={'Cloud Solutions'}
					paragraph={'Migrate to the cloud for scalability and flexibility.'}
					color={'bg-secondary'}
				/>
			</div>
		</div>
	)
}

export default HomeService

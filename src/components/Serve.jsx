import { BsDatabaseFillGear, BsFillCloudHaze2Fill } from 'react-icons/bs'
import ServeCards from './ServeCards'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import { MdMiscellaneousServices, MdSecurity } from 'react-icons/md'
import { IoMdAnalytics } from 'react-icons/io'
import { FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Serve = () => {
	const services = [
		{
			id: 1,
			header: 'IT Strategy and Planning',
			icon: <BsDatabaseFillGear />,
			list: [
				'Assessing an organization&apos;s current IT infrastructure.',
				'Developing long-term technology strategies aligned with business goals.',
				'Creating IT roadmaps to guide technology investments.',
			],
			color: 'bg-primary',
			iconColor: 'bg-secondary',
		},
		{
			id: 2,
			header: 'Managed IT Services',
			icon: <MdMiscellaneousServices />,
			list: [
				'Assessing cybersecurity risks and vulnerabilities.',
				'Developing and implementing security policies and procedures.',
				'Conducting security audits and penetration testing.',
				'Providing incident response and recovery planning.',
			],
			color: 'bg-secondary',
			iconColor: 'bg-primary',
		},
		{
			id: 3,
			header: 'Cloud Solutions',
			icon: <BsFillCloudHaze2Fill />,
			list: [
				'Designing, implementing, and managing network solutions.',
				'Optimizing network performance and scalability.',
				'Troubleshooting network issues and ensuring reliability.',
			],
			color: 'bg-primary',
			iconColor: 'bg-secondary',
		},
		{
			id: 4,
			header: 'Cybersecurity',
			icon: <MdSecurity />,
			list: [
				'Protect your organization from cyber threats and data breaches.',
				'Conduct vulnerability assessments and penetration testing.',
				'Develop a robust cybersecurity strategy.',
			],
			color: 'bg-secondary',
			iconColor: 'bg-primary',
		},
		{
			id: 5,
			header: 'Data Analytics and Business Intelligence',
			icon: <IoMdAnalytics />,
			list: [
				'Unlock valuable insights from your data.',
				'Implement data-driven decision-making processes.',
				'Build custom analytics solutions.',
			],
			color: 'bg-primary',
			iconColor: 'bg-secondary',
		},
		{
			id: 6,
			header: 'Software Development',
			icon: <FaCode />,
			list: [
				'Design and develop custom software applications.',
				'Modernize legacy systems for enhanced performance.',
				'Mobile app development for iOS and Android.',
			],
			color: 'bg-secondary',
			iconColor: 'bg-primary',
		},
	]

	return (
		<div className='overflow-x-hidden'>
			<div className=' grid grid-cols-3 justify-items-center py-[4rem] max-lg:grid-cols-2 max-sm:grid-cols-1'>
				{services.map((e) => (
					<motion.div
						initial={{ opacity: 0, scale: 0, x: 50 }}
						whileInView={{ opacity: 1, scale: 1, x: 0 }}
						className=''
						key={e.id}
					>
						<ServeCards card={e} />
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0, x: 50 }}
				whileInView={{ opacity: 1, scale: 1, x: 0 }}
				className=' text-center w-[40vw] mx-auto grid justify-items-center mb-[4rem] max-md:w-[60vw] max-sm:w-[90vw]'
			>
				<h1 className=' font-bold text-secondary text-3xl mb-[2rem]'>
					We are here to <span className=' text-primary'>solve</span> your most
					complex IT <span className=' text-primary'>challenges</span>
				</h1>

				<Link to={'/contact'}>
					<Buttons type={'other'} btnText={'Contact us'} />
				</Link>
			</motion.div>
		</div>
	)
}

export default Serve

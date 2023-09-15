import Headers from './Headers'
import WhyCards from './WhyCards'
import { motion } from 'framer-motion'

const Why = () => {
	return (
		<div className=' bg-choose_bg bg-cover py-[4rem]'>
			<div className=' w-[90vw] mx-auto'>
				<Headers text={'Why Choose West Creek Resources'} />

				<motion.div
					initial={{ opacity: 0, scale: 0, x: 100 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					transition={{ delayChildren: 0.5 }}
					className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center'
				>
					<WhyCards
						header={'Expertise'}
						text={
							'Our team consists of certified professionals with years of experience in the IT industry. We stay up-to-date with the latest technologies and best practices to deliver cutting-edge solutions.'
						}
					/>
					<WhyCards
						header={'Customization'}
						text={
							'We understand that every business is unique. Our solutions are tailored to meet your specific needs and objectives.'
						}
					/>
					<WhyCards
						header={'Reliability'}
						text={
							'We pride ourselves on our commitment to delivering projects on time and within budget. You can rely on us to keep your IT systems running smoothly.'
						}
					/>
					<WhyCards
						header={'Security'}
						text={
							'Cybersecurity is a top priority. We employ advanced security measures to protect your data and ensure compliance with industry regulations.'
						}
					/>
					<WhyCards
						header={'Client-Centric Approach'}
						text={
							'Your success is our success. We work closely with you to understand your business and provide solutions that drive growth and efficiency.'
						}
					/>
					<WhyCards
						header={'Scalability'}
						text={
							'As your business grows, our solutions can scale with you. We help you adapt to changing technology requirements.'
						}
					/>
					<WhyCards
						header={'Cost-Efficiency'}
						text={
							'Our services are designed to optimize your IT spending and maximize your ROI.'
						}
					/>
				</motion.div>
			</div>
		</div>
	)
}

export default Why

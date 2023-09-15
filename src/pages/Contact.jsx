import ContactUs from '../components/ContactUs'
import PageLanding from '../components/PageLanding'

const Contact = () => {
	return (
		<div>
			<PageLanding
				header={'Contact us'}
				paragraph={
					'Let’s start something great together. Get in touch with our team today.'
				}
			/>
			<ContactUs />
		</div>
	)
}

export default Contact

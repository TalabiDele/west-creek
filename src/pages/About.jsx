import AboutUs from '../components/AboutUs'
import PageLanding from '../components/PageLanding'

const About = () => {
	return (
		<div>
			<PageLanding
				header={'About us'}
				paragraph={
					'Welcome to West Creek Resource, where we embrace the power of discretion while thriving in the digital age. We are not your typical IT consulting firm; we&apos;re the silent architects of digital excellence, working behind the scenes to bring your most ambitious tech dreams to life.'
				}
			/>
			<AboutUs />
		</div>
	)
}

export default About

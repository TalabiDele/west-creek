/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#D17428',
				text_primary: '#D9D9D9',
				secondary: '#2C2024',
				text_secondary: '#474747',
			},
			backgroundImage: {
				hero_bg: "url('/src/assets/imgs/hero-bg.png')",
				choose_bg: "url('/src/assets/imgs/services-bg.png')",
				background: "url('/src/assets/imgs/bg.png')",
				about_bg: "url('/src/assets/imgs/serve-page.png')",
			},
		},
	},
	plugins: [],
}

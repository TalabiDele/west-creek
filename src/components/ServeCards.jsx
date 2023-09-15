/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import Buttons from './Buttons'

// eslint-disable-next-line react/prop-types
const ServeCards = ({ card }) => {
	return (
		<div>
			<div className=''>
				<div
					className={`${card.color} text-white rounded-xl px-[1rem] pt-[2rem] pb-[1rem] mb-[3rem] h-[20rem] w-[20rem] relative flex flex-col justify-between max-md:w-[18rem]`}
					key={card.id}
				>
					<div
						className={`${card.iconColor} absolute text-4xl p-[0.5rem] rounded-full -top-[2rem]`}
					>
						{card.icon}
					</div>
					<h1 className=' font-bold text-xl mb-[1rem]'>{card.header}</h1>
					<ul className=' mb-[1rem]'>
						{card.list.map((l) => (
							<li key={l} className=' list-disc text-sm mx-[1rem]'>
								{l}
							</li>
						))}
					</ul>

					<Link to={'/contact'}>
						<Buttons type={'secondary'} btnText={'Contact us'} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ServeCards

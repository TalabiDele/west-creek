import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './style.css'

const Map = () => {
	return (
		<div>
			<div className=' z-[0] relative'>
				<MapContainer
					center={[6.4688207, 3.621147]}
					zoom={13}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={[6.4688207, 3.621147]} />
				</MapContainer>
			</div>
		</div>
	)
}

export default Map

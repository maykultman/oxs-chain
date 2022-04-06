import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {initialStateReservation} from '../initializerVars';
import { resetReservation } from '../redux/actions/cartActions'
const ThankPage = (props) => {
	let navigate = useNavigate();
	if(props.reservations.hasOwnProperty('reservations') && props.reservations.reservations.length > 0) {
		localStorage.setItem('reservations', JSON.stringify(props.reservations))
		props.dispatch(resetReservation(initialStateReservation));
	}
	let storage = localStorage.getItem('reservations');
	if(storage){
		storage = JSON.parse(storage);
	}else{
		storage = initialStateReservation;
	}
	const returnHome = () => {
		localStorage.removeItem('reservations');
		navigate('/', { replace: false })
	}
	console.log(storage.data.names)
	return <>
	{
		(storage.reservations.length>0&&storage.data.names)?
		<div className="ticket-1">
			<div className="row">
			<div className="xs-12 sm-12 md-12 lg-12"><br/><br/>
				<h1 className="text-center">Gracias por tu reserva</h1>
				<div className="text-center"><button onClick={returnHome}>Regresar</button></div><br/>
			</div>
			<div className="xs-12 sm-12 md-12 lg-12">
				<div className="container">
					<div className="ticket airline">
						<div className="top">
							<h1>Datos de Reservación</h1>
							<div className="big">
								<p className="from">BWI</p>
								<p className="to"><i className="fas fa-arrow-right"></i> SAN</p>
							</div>
							<div className="top--side">
								<i className="fas fa-plane"></i>
								<p>Baltimore</p>
								<p>San Diego</p>
							</div>
						</div>
						<div className="bottom">
							<div className="column">
								<div className="row row-1">
									<p><span>Nombre</span>{storage.data.names} {storage.data.lastName}</p>
									<p><span>Flight</span>AA2005</p>
									<p className="row--right"><span>Gate</span>B3</p>
								</div>
								{storage.reservations.map((item)=>(<>
									<div className="">
										<div className="xs-12 sm-4 md-3 lg-3">
											<p><span>Hora</span>{item.hour}</p>
										</div>
										<div className="xs-12 sm-4 md-3 lg-3">
											<p className="row--right"><span>Origen</span>{item.origin}</p>
										</div>
										<div className="xs-12 sm-4 md-3 lg-3">
											<p className="row--center"><span>Destino</span>{item.destino}</p>
										</div>
										<div className="xs-12 sm-4 md-3 lg-3 text-center">
											<p><span>Pasajeros</span>{item.passenger}</p>
										</div>
									</div>
									</>
								))}
							</div>
							<div className="bar--code"></div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
		:
		<div className="ticket-1">
			<div className="row">
				<div className="xs-12 sm-12 md-12 lg-12"><br/><br/>
					<h1 className="text-center">No hay ticket a mostrar</h1>
					<div className="text-center"><button onClick={returnHome}>Regresar</button></div><br/>
				</div>
			</div>
		</div>
	}
	</>
}
export default connect((state)=>{
	return state
})(ThankPage);
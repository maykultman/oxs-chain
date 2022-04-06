import {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FaRegTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { removeItem, addDataItem, resetReservation } from '../redux/actions/cartActions';
import {initialStateReservation} from '../initializerVars';
import NumberFormat from 'react-number-format';
import CheckoutForm from './CheckoutForm';
import { formatMoney } from "../helpers";
import { toast } from 'react-toastify';
const Carrito = (props) => {
	let list = [], total = 0;
	let navigate = useNavigate();
	const { reservations } = props.reservations;
	const [openModal, setOpenModal] = useState(false);
	if(reservations&&reservations.length>0){
		reservations.forEach((item, index) =>{
			total = total + (item.passenger*item.price);
			list.push(
				<tr key={index}>
					<td>{item.origin}</td>
					<td>{item.destino}</td>
					<td>{item.hour}</td>
					<td>{item.passenger}</td>
					<td>
						{formatMoney(NumberFormat,item.price)}
					</td>
					<td>
						{formatMoney(NumberFormat,(item.passenger*item.price))}
					</td>
					<td>
						<span className="actions">
							<FaRegTrashAlt onClick={()=>{
									const flight = item;
									props.dispatch(removeItem(flight.id))
									toast.success(`El vuelo ${flight.origin} - ${flight.destino}  ha sido eliminado del carrito`);
								}}
							/>
						</span>
					</td>
				</tr>
			);
		});
	}
	const resetCart = () => {
		props.dispatch(resetReservation(initialStateReservation));
		navigate('/', { replace: false })
	}
	return <>
		
		<div className="row"><br/>
		{(!reservations)&&
			<> 
				<h3 className="text-center">Carrito vacío</h3><br></br>
				<div className="text-center">
					<Link to={'/'} className="btn">Regresar al Home</Link>
				</div>
			</>
		}
			<div className="xs-12 sm-12 md-10 lg-10 child-center">
				<table>
					<thead>
						<tr>
							<th>Origen</th><th>Destino</th><th>Hora</th>
							<th>Pasajeros</th><th>Precio</th><th>Subtotal</th><th>#</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="5" className="text-right">Total</th><th>
								{formatMoney(NumberFormat,total)}
							</th><th></th>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className="xs-12 sm-12 md-10 lg-10 child-center no-padding">
				<div className="xs-6 sm-3 md-2 lg-2">
					{(reservations&&reservations.length>0) > 0 &&<button onClick={()=>{setOpenModal(true)}}>Resevar</button>}
				</div>
				<div className="xs-6 sm-4 md-4 lg-4">
					{(reservations&&reservations.length>0) > 0 &&
						<button onClick={resetCart}>Cancelar reservaciones</button>
					}
				</div>
			</div>
		</div>
		<div className={openModal?"modal show":"modal"}>
			<div className="content">
				<CheckoutForm 
					closeModal={setOpenModal} 
					dispatch={props.dispatch}
					addDataItem={addDataItem}
					resetReservation={resetReservation}
				/>
			</div>
		</div>

	</>
}
export default connect((state)=>{
	return state
})(Carrito)
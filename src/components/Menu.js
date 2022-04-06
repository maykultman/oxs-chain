import { connect } from 'react-redux';
import { FaHtml5 } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
const Menu = (props) => {
	let location = useLocation();
	let { reservations } = props.reservations;
	const count = (reservations ? reservations.length : 0);
	let list = [];
	if(count>0){
		reservations.forEach(item=>{ 
			list.push( <li key={item.id}>{item.origin}-{item.destino} <span>{item.passenger}</span></li> );
		})
	}
	return <>
	{location.pathname!=='/gracias'?
	<header className="App-header">
		<div className="row">
			<div className="xs-6 sm-6 md-6 lg-6">
				<Link to="/" className="icon-app">
					<FaHtml5></FaHtml5>
				</Link>
			</div>
			<div className="xs-6 sm-6 md-6 lg-6 text-right">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li>
						<Link to="carrito">Carrito</Link> 
						{count>0?<span className="count">{count}</span>:null}
						{count>0?<ul className="prev-cart">{list}</ul>:''}
					</li>
				</ul>
			</div>
		</div>
	</header>
	:''}
	</>
}
export default connect((state)=>{
	return state
})(Menu)
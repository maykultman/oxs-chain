import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { initialDataUser } from "../initializerVars";
let schema = yup.object().shape({
	names: yup.string().required('*'),
	lastName: yup.string().required('*'),
	address: yup.string().required('*'),
	email: yup.string().email().required('*')
});
const CheckoutForm = (props) => {
	let navigate = useNavigate();
	const formik = useFormik({
		initialValues: initialDataUser, 
		validationSchema: schema,
		onSubmit : values => {
			props.dispatch(props.addDataItem(values));
			navigate('/gracias', { replace: true });
		}
	})
	
	return <>
		<form onSubmit={formik.handleSubmit}>
			<h3>Tus datos</h3>
			<label>
				<input type="text" name="names" placeholder=" "
					values={formik.values.names}
					onChange={formik.handleChange}
				></input>
				<span>Nombre(s)</span>
				{formik.errors.names ? <div className="error">{formik.errors.names}</div>:null}
			</label>
			<label>
				<input type="text" name="lastName" placeholder=" "
					values={formik.values.lastName}
					onChange={formik.handleChange}
				></input>
				<span>Apellidos</span>
				{formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div>:null}
			</label>
			<label>
				<input type="text" name="address" placeholder=" "
					values={formik.values.address}
					onChange={formik.handleChange}
				></input>
				<span>Dirección</span>
				{formik.errors.address ? <div className="error">{formik.errors.address}</div>:null}
			</label>
			<label>
				<input type="text" name="email" placeholder=" "
					values={formik.values.email}
					onChange={formik.handleChange}
				></input>
				<span>Correo electrónico</span>
				{formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}
			</label>
			
			<button type="submit">Enviar</button>
			
			<div className="close" onClick={()=>props.closeModal(false)}>x</div>
		</form>
	</>
}
export default CheckoutForm;
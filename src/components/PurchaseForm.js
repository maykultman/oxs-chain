import { useFormik } from "formik";
import { getId } from "../helpers";
import { hours, initialDataFlight } from "../initializerVars";
import MenuStates from "./FormBuy/MenuStates"
import Hours from "./FormBuy/Hours"
import { toast } from 'react-toastify';
import * as yup from 'yup';
let schema = yup.object().shape({
	origin: yup.string().required('*'),
	destino: yup.string().required('*'),
	hour: yup.string().required('*'),
	passenger: yup.number().required('*')
});

const PurchaseForm = ({estados, addItem, dispatch}) => {

	const formik = useFormik({
		initialValues: initialDataFlight, 
		validationSchema : schema,
		onSubmit : values => {
			toast.success(`El vuelo ${values.origin} - ${values.destino} se agregó al carrito`);
			values.id = getId();
			dispatch(addItem(values));
			formik.resetForm();
		}
	})

	return (
		<form onSubmit={formik.handleSubmit} className="formFome">
			<h3>Reserve su viaje</h3>
			<label>Origen {formik.errors.origin ? <div className="error">{formik.errors.origin}</div>:null}</label>
			<MenuStates handleChange={formik.handleChange} estados={estados} _value={formik.values.origin} name="origin"/>
			
			<label>Destino {formik.errors.origin ? <div className="error">{formik.errors.destino}</div>:null}</label>
			<MenuStates handleChange={formik.handleChange} estados={estados} _value={formik.values.destino} name="destino"/>
			
			<div>
				<label>Horarios {formik.errors.hours ? <div className="error">{formik.errors.hours}</div>:null}</label>
				{formik.values.destino&&<Hours hours={hours} handleChange={formik.handleChange}/>}
				
			</div>
			<div>
				<label>Pasajeros</label><br/>
				<input type="number" name="passenger" 
					onChange={formik.handleChange}
					value={formik.values.passenger}
				/>
				{formik.errors.passenger ? <div className="error">{formik.errors.passenger}</div>:null}
			</div>
			<button type="submit">Agregar al carrito</button>
		</form>
	)
}
export default PurchaseForm;
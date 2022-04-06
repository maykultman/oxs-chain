import { FETCH_ESTADOS_REQUEST, FETCH_ESTADOS_SUCCESS, FETCH_ESTADOS_ERROR } from "../actions/estadosActions";
const initialState = {
	estados : [],
	isFetching : false,
	error : null
}

function estados(state=initialState, action) {
	switch (action.type){
		case FETCH_ESTADOS_REQUEST :
			return {
				...state,
				isFetching : true,
			}
		case FETCH_ESTADOS_SUCCESS :
			return {
				...state,
				isFetching : false,
				estados : action.payload.estados
			}
		case FETCH_ESTADOS_ERROR :
			return {
				...state,
				isFetching : false,
				error : action.payload.error
			}
		default: 
			return state
	}
}
export default estados;
import { combineReducers } from 'redux';
import reservations from './reservationsReducer';
import estados from './estadosReducer';
export default combineReducers({
	reservations,
	estados
});
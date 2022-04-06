export const ADD_ITEM = 'ADD_ITEM'
export const ADD_DATA_ITEM = 'ADD_DATA_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const RESET_RESERVATION = 'RESET_RESERVATION'

export const addItem = (reservation) => ({
	type: ADD_ITEM,
	payload: reservation
})
  
export const addDataItem = (data) => ({
	type: ADD_DATA_ITEM,
	payload: data
})
  
export const removeItem = (reservation) => ({
	type: REMOVE_ITEM,
	payload: reservation
})
export const resetReservation = () => ({
	type: RESET_RESERVATION,
	payload: []
})
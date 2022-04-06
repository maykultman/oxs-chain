export const FETCH_ESTADOS_REQUEST = 'FETCH_ESTADOS_REQUEST'
export const FETCH_ESTADOS_SUCCESS = 'FETCH_ESTADOS_SUCCESS'
export const FETCH_ESTADOS_ERROR = 'FETCH_ESTADOS_ERROR'

export const fetchPosts = () => (dispatch) => {
	dispatch({ type : FETCH_ESTADOS_REQUEST })
	const params = {
		method: 'GET',
		headers: {
			"Apikey": "f2cca15ca32baf3f5d6b786933a957e9b6af4ecc",
			"Accept": "application/json"
		}
	};
	const url = 'https://sepomex.razektheone.com/estados';

	fetch(url, params)
	.then(res=>res.json())
	.then(posts=>{
		console.log(posts);
		dispatch({
			type: FETCH_ESTADOS_SUCCESS,
			payload: {
				estados : posts.estados
			}
		})
	})
	.catch(error => {
		dispatch({
			type: FETCH_ESTADOS_ERROR,
			error: error.toString(),
		})
	})
}
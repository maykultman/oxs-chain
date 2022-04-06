import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/estadosActions'
import { addItem } from '../redux/actions/cartActions'
import { SyncLoader } from 'react-spinners';
import PurchaseForm from './PurchaseForm';
const Home = ({dispatch, estados, isFetching})=>{
	const initFetch = useCallback(()=>{
		dispatch(fetchPosts());
	},[dispatch]);
	useEffect(() => {
		initFetch();
	}, [initFetch]);
	
	return (
		<div className="row">
			<div className="xs-12 sm-8 md-5 lg-5">
			{ 
				isFetching
				?
					<SyncLoader/>
				:
				(
					<PurchaseForm 
						estados={estados.estados} 
						addItem={addItem}
						dispatch={dispatch}

					/>
				)
			}
			</div>
			<div className="xs-12 sm-8 md-5 lg-5"></div>
		</div>
	)
}

export default connect((state)=>{
	return state
})(Home)
import { FETCH_EXCHANGE } from '../actions/type';

export default function(state = {}, action) {
        // console.log('in reducer');
	switch(action.type) {
        case FETCH_EXCHANGE:
        //returning rates object from payload
        // console.log('in FETCH_EXCHANGE');
        return [action.payload.rates, ...state];
	}
	return state;
}
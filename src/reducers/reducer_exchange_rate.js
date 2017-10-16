import { FETCH_EXCHANGE } from '../actions/type';

export default function(state = {}, action) {
	switch(action.type) {
        case FETCH_EXCHANGE:
        //returning rates object from payload
        return [action.payload.data.rates, ...state];
	}
	return state;
}
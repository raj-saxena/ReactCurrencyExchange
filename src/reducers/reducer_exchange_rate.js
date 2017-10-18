import { FETCH_EXCHANGE } from '../actions/type';

export default function(state = {}, action) {
	switch(action.type) {
        case FETCH_EXCHANGE:
        //returning rates object from action.payload.data
        console.log('in fetch');
        return [action.payload.data, ...state];
	}
	return state;
}
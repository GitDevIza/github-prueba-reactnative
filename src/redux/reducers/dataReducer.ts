import { UserAction } from '../actions'
import { DataTotal, UserData, StateData } from '../models'

const initialState = {
	availability: {} as DataTotal
}

const DataReducer = (state: StateData = initialState, action: UserAction ) => {
	switch(action.type){
		case 'ON_AVAILABILITY':
			return{
				...state,
				availability: action.payload
			}
		default:
			return state 
	}
} 

export { DataReducer };
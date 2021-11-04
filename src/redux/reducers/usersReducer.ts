import { UserAction } from '../actions'
import { DataTotal, UserData, UserState } from '../models'

const initialState = {
	availability: {} as DataTotal,
}

const UserReducer = (state: UserState = initialState, action: UserAction ) => {
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

export { UserReducer };
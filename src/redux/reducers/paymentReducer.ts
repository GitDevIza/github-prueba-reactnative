import { PaymentAction } from '../actions'
import { PaymentDataTotal, PaymentState } from '../models'

const PaymentinitialState = {
	paymentAvailability: {} as PaymentDataTotal
}

const PaymentReducer = (state: PaymentState = PaymentinitialState, action: PaymentAction ) => {
	switch(action.type){
		case 'ON_AVAILABILITY':
			return{
				...state,
				paymentAvailability: action.payload
			}
		default:
			return state 
	}
} 

export { PaymentReducer };
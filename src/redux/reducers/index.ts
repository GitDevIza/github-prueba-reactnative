import { combineReducers } from 'redux'
import { DataReducer } from './dataReducer'
import { PaymentReducer } from './paymentReducer'

const rootReducer = combineReducers({
	dataReducer: DataReducer,
	paymentReducer: PaymentReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
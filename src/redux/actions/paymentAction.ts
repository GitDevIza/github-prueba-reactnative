import axios from 'axios';
import { Dispatch } from 'react';
import { PaymentDataTotal } from '../models';

export interface AvailabilityPaymentData{
	readonly type: 'ON_AVAILABILITY',
	payload: PaymentDataTotal
}

export interface DataErrorPaymentAction{
	readonly type: 'ON_DATA_ERROR',
	payload: any
}

export type PaymentAction = AvailabilityPaymentData | DataErrorPaymentAction;

//Trigger actions from Components

export const onPaymentAvailability = () => {

	return async ( dispatch: Dispatch<PaymentAction> ) => {

		try{
			const response = await axios.get<PaymentDataTotal>(`https://servicios.inclubtest.online:2053/api/payment/schedule/vouchers/383`);


			if(!response){
				dispatch({
					type: 'ON_DATA_ERROR',
					payload: 'Availability Error'
				})
			}else{ 
				//save our location in local storage
				dispatch({
					type: 'ON_AVAILABILITY',
					payload: response.data
				})
			}
			
		} catch(error){
			dispatch({
				type: 'ON_DATA_ERROR',
				payload: error
			})
		}
	}
}
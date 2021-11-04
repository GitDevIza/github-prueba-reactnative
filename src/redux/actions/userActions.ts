import axios from 'axios';
import { Dispatch } from 'react';
import { Address } from 'expo-location'
import { UserInfoData, UserData, DataTotal } from '../models';

export interface AvailabilityData{
	readonly type: 'ON_AVAILABILITY',
	payload: DataTotal
}

export interface DataErrorAction{
	readonly type: 'ON_VIEW_ERROR',
	payload: any
}

export type UserAction = AvailabilityData | DataErrorAction;

//Trigger actions from Components

export const onAvailability = (postCode: string) => {

			console.log(postCode);
	return async ( dispatch: Dispatch<UserAction> ) => {

		try{
			const response = await axios.get<DataTotal>(`https://servicios.inclubtest.online:2053/api/suscription/all/state/10`);


			if(!response){
				dispatch({
					type: 'ON_VIEW_ERROR',
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
			console.log('err');
			dispatch({
				type: 'ON_VIEW_ERROR',
				payload: error
			})
		}
	}
}
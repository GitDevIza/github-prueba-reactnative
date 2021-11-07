import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Dimensions, View, Picker } from 'react-native';

//import {View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { useNavigation } from '../utils';
import { UserCard } from '../components'
import { onAvailability, ApplicationState, DataTotal, StateData, UserData } from '../redux'

interface HomeProps{
	dataReducer: StateData,
	onAvailability: Function,
}

export const _HomeScreen: React.FC<HomeProps> = (props) => {

	const { navigate } = useNavigation();
	const { availability } = props.dataReducer;
	const { status, description, objModel } = availability;

	const [isStateUser, setStateUser] = useState(false);
	const [isStateUserValue, setStateUserValue] = useState('all');

	console.log(description);

	useEffect(() => {
		props.onAvailability();

	}, []);

	const onTapUser = (item: UserData) => {
		navigate('UserDetailPage', {userData: item});
	}

	const onSelectPicker = (value) => {
		if(value == 'all'){
			setStateUser(false);
			setStateUserValue('all');
			
		}else{
			setStateUser(true);
			setStateUserValue(value);
		}
	}


	return(
		<View>
			<View>
				<Picker onValueChange={onSelectPicker} selectedValue={isStateUserValue}>
					<Picker.Item label="Seleccione Estado..." value='all' ></Picker.Item>
					<Picker.Item label="Inactivo" value="0" ></Picker.Item>
					<Picker.Item label="Activo" value="1"></Picker.Item>
					<Picker.Item label="Pendiente Validación Inicial" value="2"></Picker.Item>
					<Picker.Item label="Rechazo Inicial" value="3"></Picker.Item>
					<Picker.Item label="Pagar Despues" value="4"></Picker.Item>
					<Picker.Item label="Deuda 1" value="5"></Picker.Item>
					<Picker.Item label="Deuda 2" value="6"></Picker.Item>
					<Picker.Item label="Deuda 3" value="7"></Picker.Item>
					<Picker.Item label="PreLiquidación" value="8"></Picker.Item>
					<Picker.Item label="Congelado" value="9"></Picker.Item>
					<Picker.Item label="Pendiente Validación Cuota" value="10"></Picker.Item>
					<Picker.Item label="Rechazo Cuota" value="11"></Picker.Item>
					<Picker.Item label="Suscripción Finalizada" value="12"></Picker.Item>
					<Picker.Item label="Pendiente Validación Migración" value="13"></Picker.Item>
					<Picker.Item label="Rechazo Migración" value="14"></Picker.Item>
					<Picker.Item label="Liquidación" value="15"></Picker.Item>
				</Picker>	
			</View>

			<View>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={
						isStateUser 
						?
						objModel.filter((item)=>{
							if(item.userResponseDto['idState'] == isStateUserValue){
								return item;
							}
						})
						:
						objModel
					}
					renderItem = {({item}) => <UserCard item={item} onTap={ onTapUser } /> }
					keyExtractor = { (item) => `${item.id}`}
				/>
			</View>

		</View>
		)

} 


const mapToStateProps = (state: ApplicationState) => ({
	dataReducer: state.dataReducer
})

const HomeScreen = connect(mapToStateProps, {onAvailability})(_HomeScreen)

export { HomeScreen }
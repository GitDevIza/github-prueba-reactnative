import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';

//import {View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import Moment from 'moment'
import { useNavigation } from '../utils';
import { PaymentCard } from '../components'
import { onPaymentAvailability, UserData, ApplicationState, PaymentState, PaymentData } from '../redux'

interface PaymentProps{
	navigation: { getParam: Function }
}

	const screenWidth = Dimensions.get('screen').width;

export const UserScreen: React.FC<PaymentProps> = (props) => {
	

	const { getParam } = props.navigation;
	const { navigate } = useNavigation();

	const userData = getParam('userData') as UserData;

	/* 
	const { paymentAvailability } = props.paymentReducer;
	const { status, description, objModel } = paymentAvailability;

	useEffect(() => {
		props.onPaymentAvailability();

	}, []); */
	const dateStrg = userData.lastPaymentDate;
	const dateExpire = userData.nextExpiration;

console.log(dateExpire);

	return(	<View style={styles.container} >
					<View style={styles.userCar}>
						<View>
							<Text>Monto Total: S/. {userData.packageDetail['price']} </Text>
						</View>
						<View>
							<Text>Fecha de Pago: {Moment(dateStrg).format('d MMMM YYYY, H:mma')}</Text>
						</View>
						<View>
							<Text>Fecha de Vencimiento:  {Moment(dateExpire).format('d MMMM YYYY, H:mma')}</Text>
						</View>
					</View>
				</View>
		)

} 

const styles = StyleSheet.create({
	container: {
		width: screenWidth - 20,
		height: 150,
		justifyContent: 'space-around',
		paddingTop:40,
		marginLeft: 10,
		marginRight:10,
		marginBottom: 10,
		borderRadius: 10,
		borderWidth: 2
	},

	userCar:{
		margin: 10,
		height:150
	}
});


/*const mapToStateProps = (state: ApplicationState) => ({
	paymentReducer: state.paymentReducer
})

const UserScreen = connect(mapToStateProps, {onPaymentAvailability})(_UserScreen)*/

export { UserScreen }
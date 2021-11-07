import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { UserData } from '../redux'
import Moment from 'moment'

const screenWidth = Dimensions.get('screen').width;

interface PaymentDataProps{
	item: UserData;
}

console.log('aqui');

const PaymentCard: React.FC<PaymentDataProps> = ({item}) => {

	const dateStrg = item.lastPaymentDate;
	const dateExpire = item.nextExpiration;

	console.log(item);

	return (
		<View style={styles.container} >
			<View style={styles.userCar}>
				<View>
					<Text>Monto Total: {item.packageDetail['price']} </Text>
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
		flex:1,
		width: screenWidth - 20,
		height: 200,
		justifyContent: 'space-around',
		marginLeft: 10,
		marginRight:10,
		marginBottom: 10,
		borderRadius: 10,
		borderWidth: 2
	},

	userCar:{
		margin: 10,
		height:200
	}
});

export {PaymentCard}
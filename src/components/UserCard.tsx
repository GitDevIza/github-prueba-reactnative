import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { UserData } from '../redux'
import Moment from 'moment'

const screenWidth = Dimensions.get('screen').width;

interface UserDataProps{
	item: UserData;
	onTap: Function	
}

const UserCard: React.FC<UserDataProps> = ({item, onTap}) => {

	const dateStrg = item.userResponseDto['createDate'];

	return (
		<TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
			<View style={styles.userCar}>
				<View>
					<Text>Cliente: {item.userResponseDto['name']} {item.userResponseDto['lastname']}</Text>
				</View>
				<View>
					<Text>Fecha Inscripcion: {Moment(dateStrg).format('d MMMM YYYY, H:mma')}</Text>
				</View>
				<View>
					<Text>Dirección: { item.userResponseDto['address'] }</Text>
				</View>
				<View>
					<Text>Estado: { item.userResponseDto['stateText'] }</Text>
				</View>
			</View>
		</TouchableOpacity>
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

export {UserCard}
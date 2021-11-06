import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { UserData } from '../redux'

const screenWidth = Dimensions.get('screen').width;

interface UserDataProps{
	item: UserData | UserInfoData;
	onTap: Function	
}

const UserCard: React.FC<UserDataProps> = ({item, onTap}) => {

	return (
		<TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
			<View>
				<View>
					<Text>Cliente: {item.userResponseDto['name']} {item.userResponseDto['lastname']}</Text>
				</View>
				<View>
					<Text>Fecha Inscripcion: {item.userResponseDto['createDate']}</Text>
				</View>
				<View>
					<Text>Dirección: { item.userResponseDto['address'] }</Text>
				</View>
			</View>
			<View>
			</View>
		</TouchableOpacity>
		)
}

const styles = StyleSheet.create({
	container: {
		width: screenWidth - 20,
		height: 120,
		justifyContent: 'space-around',
		margin: 10,
		borderRadius: 20
	}
});

export {UserCard}
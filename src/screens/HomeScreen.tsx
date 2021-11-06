import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';

//import {View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { useNavigation } from '../utils';
import { UserCard } from '../components'
import { onAvailability, ApplicationState, DataTotal, StateData, UserData } from '../redux'

interface HomeProps{
	userReducer: StateData,
	onAvailability: Function,
}

export const _HomeScreen: React.FC<HomeProps> = (props) => {

	const { navigate } = useNavigation();
	const { availability } = props.userReducer;
	const { status, description, objModel } = availability;

	console.log(description);

	useEffect(() => {
		props.onAvailability();

	}, []);

	const onTapUser = (item: UserData) => {
		navigate('UserDetailPage', {userData: item});
	}


	return(
		<View>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={objModel}
				renderItem = {({item}) => <UserCard item={item} onTap={ onTapUser } /> }
				keyExtractor = { (item) => `${item.id}`}
			/>
		</View>
		)

} 


const mapToStateProps = (state: ApplicationState) => ({
	userReducer: state.userReducer
})

const HomeScreen = connect(mapToStateProps, {onAvailability})(_HomeScreen)

export { HomeScreen }
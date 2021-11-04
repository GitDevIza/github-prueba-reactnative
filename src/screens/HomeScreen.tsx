import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';

//import {View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { useNavigation } from '../utils';
import { SearchBar, ButtonWithIcon, CategoryCard, RestaurantCard } from '../components'
import { onAvailability, AplicationState, DataTotal, UserState } from '../redux'

interface HomeProps{
	userReducer: UserState,
	onAvailability: Function,
}

export const _HomeScreen: React.FC<HomeProps> = (props) => {

	
	const { availability } = props.userReducer;

	useEffect(() => {
		props.onAvailability('local');

	}, [])

} 


const mapToStateProps = (state: AplicationState) => ({
	userReducer: state.userReducer
})

const HomeScreen = connect(mapToStateProps, {onAvailability})(_HomeScreen)

export { HomeScreen }
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen } from './src/screens/HomeScreen';
import { UserScreen } from './src/screens/UserScreen';
import { store } from './src/redux';

import { Provider } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const switchNavigator = createSwitchNavigator({
  Homestack:{
    screen: createStackNavigator({
      Homepage: HomeScreen,
      UserDetailPage: UserScreen,
      //search address screen
      }),
    navigationOptions:{
       title:'Listado de Clientes',
    } 
  }
});

const AppNavigation = createAppContainer(switchNavigator);


export default class App extends React.Component{
  
  render(){
    return (
      <Provider store={ store }>
        <AppNavigation />
      </Provider>
    );

  } 
  
}

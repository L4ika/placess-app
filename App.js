import { createStackNavigator, 
  createBottomTabNavigator, 
  createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    View,
    StyleSheet
  } from "react-native";

import configureStore from "./src/store/configureStore";

import SharePlaceScreen from "./src/screens/SharePlace";
import ViewPlacesScreen from "./src/screens/ViewPlaces";
import ViewDetailPlaceScreen from "./src/screens/ViewDetailPlace";

const store = configureStore();

const ViewPlacesStack = createStackNavigator({
  Home: ViewPlacesScreen,
  Details: ViewDetailPlaceScreen,
});


const Tabs = createBottomTabNavigator({

    SharePlace: {
      screen: SharePlaceScreen,
      navigationOptions: {
        tabBarLabel: 'Share Place',
        tabBarIcon: <Icon name="ios-share" size={35} />
      },
    },

    ViewPlaces: {
        screen: ViewPlacesStack,
        navigationOptions: {
          tabBarLabel: 'View Places',
          tabBarIcon: <Icon name="ios-list" size={35} />
        },
    },

  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});


const Container = createAppContainer(Tabs);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Container />
        </View>
      </Provider>
    );
  }
}



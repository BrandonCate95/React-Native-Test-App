import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OptionsScreen from '../screens/profile/OptionsScreen'
import SettingsScreen from '../screens/profile/SettingsScreen'

const RootStack = createStackNavigator(
    {
      Options: OptionsScreen,
      Settings: SettingsScreen,
    },
    {
      initialRouteName: 'Options',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FullLoginScreen from '../screens/login/FullLoginScreen'
import ForgotPasswordScreen from '../screens/login/ForgotPasswordScreen'

const RootStack = createStackNavigator(
    {
        Login: FullLoginScreen,
        ForgotPassword: ForgotPasswordScreen,
    },
    {
        initialRouteName: 'Login',
    }
);

const LoginContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <LoginContainer />;
    }
}


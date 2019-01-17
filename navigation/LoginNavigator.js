import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FullLoginScreen from '../screens/login/FullLoginScreen'
import ForgotPasswordScreen from '../screens/login/ForgotPasswordScreen'
import ResetedPasswordScreen from '../screens/login/ResetedPasswordScreen'

const RootStack = createStackNavigator(
    {
        Login: FullLoginScreen,
        ForgotPassword: ForgotPasswordScreen,
        ResetedPassword: ResetedPasswordScreen,
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


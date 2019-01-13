import React from 'react'
import LoginNavigator from '../navigation/LoginNavigator'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <LoginNavigator />
        )
    }
}
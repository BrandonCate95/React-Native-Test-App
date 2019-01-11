import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import bgImage from '../assets/images/bgImage2.png'
import logo from '../assets/images/badLOGO.png'

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            showPassword: true,
            pressed: false,

        }
    }

    showPassword = () => {
        if (this.state.pressed == false) {
            this.setState({ showPassword: false, pressed: true })
        }

        else {
            this.setState({ showPassword: true, pressed: false })
        }
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}> WildFire Club Id</Text>
                </View>

                <View>
                    <Icon name={'user'} size={24} color={'rgba(255, 255, 255, 0.9)'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColo={'rgba(255, 255, 255, 0.9)'}
                        underLineColorAndroid='transparent' />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'lock1'} size={24} color={'rgba(255, 255, 255, 0.9)'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPassword}
                        placeholderTextColo={'rgba(255, 255, 255, 0.9)'}
                        underLineColorAndroid='transparent' />
                    <TouchableOpacity style={styles.eyeButton}
                        onPress={this.showPassword.bind(this)}>
                        <Icon name={(this.state.press == false ? 'eye' : 'lock')} size={26} color={'rgba(255, 255, 255, 0.9)'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

            </ImageBackground>


        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 120,
        height: 120
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },

    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1.0

    },

    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.9)',
        marginHorizontal: 25
    },

    inputContainer: {
        marginTop: 10

    },

    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },

    eyeButton: {
        position: 'absolute',
        top: 8,
        right: 37
    },

    loginButton: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },

    text: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 16,
        textAlign: 'center'
    }
})
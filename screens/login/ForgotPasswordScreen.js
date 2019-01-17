import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import bgImage from '../../assets/images/bgImage2.png'
import logo from '../../assets/images/badLOGO.png'
import Icon from 'react-native-vector-icons/Ionicons' //USE REACT BASE INSTEAD

const { width: WIDTH } = Dimensions.get('window')


export default class ForgotPasswordScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}> WildFire Club Id</Text>
                    <Text style={styles.resetText}>Reset Password Screen</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.instructions}>Please Enter Your Email to Reset Your Password</Text>
                    <Icon name={'ios-mail'} size={24} color={'rgba(255, 255, 255, 0.9)'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email Address'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.9)'}
                        underLineColorAndroid='transparent' />
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={() => this.props.navigation.navigate('ResetedPassword')}>
                    <Text style={styles.text}>Reset Password</Text>
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
        alignItems: 'center',
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

    resetText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1.0

    },

    instructions: {
        color: 'white',
        fontSize: 14,
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
        marginTop: 10,
        alignItems: 'center',
    },

    inputIcon: {
        position: 'absolute',
        top: 36,
        left: 37
    },

    resetButton: {
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
    },
})
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import bgImage from '../../assets/images/bgImage2.png'
import logo from '../../assets/images/badLOGO.png'
import Icon from 'react-native-vector-icons/Ionicons' //USE REACT BASE INSTEAD

const { width: WIDTH } = Dimensions.get('window')


export default class ResetedPasswordScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <TouchableOpacity style={styles.resetedPasswordButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text> Your Password Has Been Reset</Text>
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
    
   resetedPasswordButton: {
       color: 'rgba(255,255,255,1)',
   }
})
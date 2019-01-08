import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    Container:{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
  })

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

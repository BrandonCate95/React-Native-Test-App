import React from 'react';
import { View, Text, Button } from 'react-native';
import ProfileNavigator from '../navigation/ProfileNavigator'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <ProfileNavigator />
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Profile Screen</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => this.props.navigation.navigate('Profile_Test')}
      //   />
      // </View>
    )
  }
}
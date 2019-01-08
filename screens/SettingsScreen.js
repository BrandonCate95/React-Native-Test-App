import React from 'react'
import ProfileNavigator from '../navigation/ProfileNavigator'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <ProfileNavigator />
    )
  }
}
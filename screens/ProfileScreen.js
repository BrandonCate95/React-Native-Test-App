import React from 'react'
import ProfileNavigator from '../navigation/ProfileNavigator'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <ProfileNavigator />
    )
  }
}
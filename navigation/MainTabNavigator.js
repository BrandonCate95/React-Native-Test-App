import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../containers/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen'

const styles = StyleSheet.create({
  TabBar: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: '100%',
    borderTopColor: "transparent",
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: 3
  },
  TabBarIcon: {}
})

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={styles.TabBarIcon}
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home' : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={styles.TabBarIcon}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-beer' : 'md-beer'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={styles.TabBarIcon}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={styles.TabBarIcon}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    LoginStack,
    LinksStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      style: styles.TabBar
    }
  }
);

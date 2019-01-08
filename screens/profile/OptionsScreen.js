import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Button, List, Text, Icon, Left, Body, Right, View } from 'native-base'
import getPlatformName from '../../utilities/getPlatformName'
import ListItem from '../../components/ListItem'

const styles = StyleSheet.create({
  Container:{
    flex: 1
  },
  Content:{
    marginTop: 30
  },
  UserContainer:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  UserIcon:{
    fontSize: 80, 
    color: '#afafaf'
  },
  Username:{
    fontSize: 24,
  },
  Hr:{
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  }
})

export default class OptionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    options: [
      { navPage: 'Settings', nameLeftIcon: 'notifications', text: 'Notifications' },
      { navPage: 'Settings', nameLeftIcon: 'refresh', text: 'Payment History' },
      { navPage: 'Settings', nameLeftIcon: 'gift', text: 'Promotions' },
      { navPage: 'Settings', nameLeftIcon: 'settings', text: 'Settings' },
      { navPage: 'Settings', nameLeftIcon: 'help-circle-outline', text: 'Help/Support' },
      { navPage: 'Settings', nameLeftIcon: 'information-circle-outline', text: 'Legal' },
      { navPage: 'Settings', nameLeftIcon: 'exit', text: 'Sign Out' },
    ]
  }

  render() {
    const { options } = this.state
    return(
        <Container style={styles.Container}>
          <Content style={styles.Content}>

            <View style={styles.UserContainer}>
              <Icon 
                name={getPlatformName('contact')} 
                style={styles.UserIcon}
              />
              <Text style={styles.Username}>Bobby Bouncer</Text>
            </View>

            <View style={styles.Hr} />

            <List>

              {options.map((item) => 
                <ListItem
                  key={item.text}
                  listItemOnPress={() => this.props.navigation.navigate(item.navPage)}
                  nameLeftIcon={item.nameLeftIcon}
                  text={item.text}
                  nameRightIcon={'arrow-forward'}
                />
              )}

              

              {/* <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'refresh'}
                text={'Payment History'}
                nameRightIcon={'arrow-forward'}
              />

              <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'gift'}
                text={'Promotions'}
                nameRightIcon={'arrow-forward'}
              />

              <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'settings'}
                text={'Settings'}
                nameRightIcon={'arrow-forward'}
              />

              <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'help-circle-outline'}
                text={'Help/Support'}
                nameRightIcon={'arrow-forward'}
              />

              <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'information-circle-outline'}
                text={'Legal'}
                nameRightIcon={'arrow-forward'}
              />

              <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'exit'}
                text={'Sign Out'}
                nameRightIcon={'arrow-forward'}
              /> */}

            </List>
          </Content>
        </Container>
    )
  }
}

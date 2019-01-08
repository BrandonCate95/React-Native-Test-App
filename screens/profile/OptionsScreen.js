import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Button, List, Text, Icon, Left, Body, Right, View } from 'native-base'
import getPlatformName from '../../utilities/getPlatformName'
import ListItem from '../../components/ListItem'

const styles = StyleSheet.create({
  UserContainer:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
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

  render() {
    return(
        <Container style={{ flex: 1 }}>
          <Content style={{marginTop: 30}}>

            <View style={styles.UserContainer}>
              <Icon 
                name={getPlatformName('contact')} 
                style={{fontSize: 80, color: '#afafaf'}}
              />
              <Text style={styles.Username}>Bobby Bouncer</Text>
            </View>

            <View style={styles.Hr} />

            <List>

              <ListItem 
                listItemOnPress={() => this.props.navigation.navigate('Settings')}
                nameLeftIcon={'notifications'}
                text={'Notifications'}
                nameRightIcon={'arrow-forward'}
              />

              <ListItem 
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
              />

            </List>
          </Content>
        </Container>
    )
  }
}

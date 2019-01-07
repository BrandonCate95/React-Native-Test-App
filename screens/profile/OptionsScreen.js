import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Header, StyleProvider, Container, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, View } from 'native-base'

import getTheme from '../../native-base-theme/components'
import custom from '../../native-base-theme/variables/Custom'

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
  },
  ListItemButton:{
    // backgroundColor: "#FF9501",
  }
})

export default class OptionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      // <StyleProvider style={{...getTheme(custom)}}>
        <Container style={{ flex: 1 }}>
          <Content style={{marginTop: 30}}>

            <View style={styles.UserContainer}>
              <Icon 
                name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} 
                style={{fontSize: 80, color: '#afafaf'}}
              />
              <Text style={styles.Username}>Bobby Bouncer</Text>
            </View>

            <View style={styles.Hr} />

            <List>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Notifications</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Payment History</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Promotions</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Settings</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-help-circle-outline' : 'md-help-circle-outline'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Help/Support</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Legal</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'} />
                  </Button>
                </Left>
                <Body>
                  <Text>Sign Out</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

            </List>
          </Content>
        </Container>
      // </StyleProvider>
    )
  }
}

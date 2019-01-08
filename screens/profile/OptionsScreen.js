import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, View } from 'native-base'
import getPlatformName from '../../utilities/getPlatformName'

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

              <ListItem icon onPress={() => this.props.navigation.navigate('Settings')}>
                <Left>
                  <Button style={styles.ListItemButton}>
                    <Icon active name={getPlatformName('notifications')} />
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
                    <Icon active name={getPlatformName('refresh')} />
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
                    <Icon active name={getPlatformName('gift')} />
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
                    <Icon active name={getPlatformName('settings')} />
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
                    <Icon active name={getPlatformName('help-circle-outline')} />
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
                    <Icon active name={getPlatformName('information-circle-outline')} />
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
                    <Icon active name={getPlatformName('exit')} />
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
    )
  }
}

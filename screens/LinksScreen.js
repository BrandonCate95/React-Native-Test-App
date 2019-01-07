import React from 'react';
import { ScrollView, StyleSheet, Platform, Image } from 'react-native';
import { StyleProvider, Container, Header, Item, Input, Icon, Button, Text, Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';

import getTheme from '../native-base-theme/components'
import custom from '../native-base-theme/variables/Custom'

var ar = [1,2,3,4]

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
          <Container>
            <Header searchBar rounded style={{backgroundColor: '#efefef', marginTop: 15}}>
              <Item>
                <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
                <Input placeholder="Search" />
                <Icon name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
              </Item>
              {Platform.OS === 'ios' &&
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              }
            </Header>
            <ScrollView>
              <Content>
                {ar.map((num) =>             
                  <Card key={num}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri: 'https://nativebase.io/assets/img/front-page-icon.png'}} />
                        <Body>
                          <Text>NativeBase</Text>
                          <Text note>GeekyAnts</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri: 'https://4.bp.blogspot.com/_xl9E-bw7sMg/TM4F7-37b8I/AAAAAAAAAlo/sIQMOd0IpbU/s1600/inside+a+forest_negative.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent>
                          <Text>12</Text>
                          <Icon name="thumbs-up" />
                        </Button>
                      </Left>
                      <Right>
                        <Button transparent>
                          <Text>4</Text>
                          <Icon name="chatbubbles" />
                        </Button>
                      </Right>
                    </CardItem>
                  </Card>
                )}
              </Content>
            </ScrollView>
          </Container> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

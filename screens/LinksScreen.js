import React from 'react'
import { ScrollView, StyleSheet, Platform, Image } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Content, CardItem, Thumbnail, Left, Body, Right } from 'native-base'
import getPlatformName from '../utilities/getPlatformName'
import Card from '../components/Card'

var ar = [1,2,3,4]

const styles = StyleSheet.create({
  Header:{
    backgroundColor: '#efefef',
    marginTop: 15,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
          <Container>
            <Header searchBar rounded style={styles.Header}>
              <Item>
                <Icon name={getPlatformName('search')} />
                <Input placeholder="Search" />
                <Icon name={getPlatformName('people')} />
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
                  <Card 
                    key={num}
                    thumbnailUri={'https://nativebase.io/assets/img/front-page-icon.png'}
                    title={'NativeBase'}
                    subTitle={'GeekyAnts'}
                    bodyUri={'https://4.bp.blogspot.com/_xl9E-bw7sMg/TM4F7-37b8I/AAAAAAAAAlo/sIQMOd0IpbU/s1600/inside+a+forest_negative.jpg'}
                    numLikes={120}
                    numComments={3}
                  />  
                )}         
                  {/* <Card key={num}>
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
                )} */}
              </Content>
            </ScrollView>
          </Container> 
    )
  }
}

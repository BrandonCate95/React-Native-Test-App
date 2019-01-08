import React from 'react'
import { ScrollView, StyleSheet, Platform } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Content } from 'native-base'
import getPlatformName from '../utilities/getPlatformName'
import Card from '../components/Card'

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

  state = {
    Cards: []
  }

  componentDidMount = async () => {
    //fake async get method
    await this.setState({ Cards: [1,2,3,4] })
  }

  render() {
    const { Cards } = this.state
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
                {Cards.map((num) =>
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
              </Content>
            </ScrollView>
          </Container> 
    )
  }
}

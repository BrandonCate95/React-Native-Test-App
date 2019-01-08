import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Icon, Button, Text, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base'

const styles = StyleSheet.create({
  bodyImage:{
    height: 200,
    width: null,
    flex: 1
  }
})

export default class CardCustom extends React.Component{
  render(){
    const { thumbnailUri, title, subTitle, bodyUri, numLikes, numComments } = this.props
    return(
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: thumbnailUri}} />
            <Body>
              <Text>{title}</Text>
              <Text note>{subTitle}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: bodyUri}} style={styles.bodyImage}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Text>{numLikes}</Text>
              <Icon name="thumbs-up" />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>{numComments}</Text>
              <Icon name="chatbubbles" />
            </Button>
          </Right>
        </CardItem>
      </Card>      
    )
  }
}
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, ListItem, Text, Icon, Left, Body, Right, View } from 'native-base'

const defaultStyles = StyleSheet.create({
  ListItemButton:{
  }
})

export default class ListItemCustom extends React.Component{
  render(){
    const { listItemOnPress, nameLeftIcon, text, nameRightIcon } = this.props
    return(
      <ListItem icon onPress={listItemOnPress}>
        {nameLeftIcon &&
          <Left>
            <Button style={defaultStyles.ListItemButton}>
              <Icon active name={getPlatformName(nameLeftIcon)} />
            </Button>
          </Left>
        }
        <Body>
          <Text>{text}</Text>
        </Body>
        {nameRightIcon &&
          <Right>
            <Icon name={nameRightIcon} />
          </Right>
        }        
      </ListItem>  
    )
  }
}
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Item = ({ name, color, text, bodyTextStyles }) => {
  const { textStyle, container } = StyleSheet.create({
    textStyle: {
      ...bodyTextStyles,
      fontWeight: 'bold'
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  return (
    <View style={container}>
      <Feather name={name} size={50} color={color} />
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

export default Item

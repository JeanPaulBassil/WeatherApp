import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'

const ErrorItem = ({ error }) => {
  return (
    <View style={container}>
      <Feather name={'frown'} size={100} color={'white'} />
      <Text style={errorMessage}>Sorry, something went wrong.</Text>
    </View>
  )
}

const { container, errorMessage } = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 10
  }
})

export default ErrorItem

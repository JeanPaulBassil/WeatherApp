/* eslint-disable prettier/prettier */

import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const currentWeather = () => {
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          first="High: 8 "
          second="Low: 6"
          styles={{
            wrapper: highLowWrapper,
            firstText: highLow,
            secondText: highLow
          }}
        />
      </View>
      <RowText
        first="It's sunny"
        second="It's perfect t-shirt weather"
        styles={{
          wrapper: bodyWrapper,
          firstText: description,
          secondText: message
        }}
      />
    </SafeAreaView>
  )
}

const {
  container,
  wrapper,
  temp,
  feels,
  highLow,
  highLowWrapper,
  bodyWrapper,
  description,
  message
} = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default currentWeather

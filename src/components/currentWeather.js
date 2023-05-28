/* eslint-disable prettier/prettier */

import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const currentWeater = () => {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={Styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={Styles.temp}>6</Text>
        <Text style={Styles.feels}>Feels like 5</Text>
        <View style={Styles.highLowWrapper}>
          <Text style={Styles.highLow}>High: 8 </Text>
          <Text style={Styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={Styles.bodyWrapper}>
        <Text style={Styles.description}>It&apos;s sunny</Text>
        <Text style={Styles.message}>It&apos;s perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
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
export default currentWeater

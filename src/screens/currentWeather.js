/* eslint-disable prettier/prettier */

import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{Math.round(temp)}°C</Text>
        <Text style={feels}>Feels like {Math.round(feels_like)}°C</Text>
        <RowText
          first={`High: ${Math.round(temp_max)}°C `}
          second={`Low: ${Math.round(temp_min)}°C`}
          styles={{
            wrapper: highLowWrapper,
            firstText: highLow,
            secondText: highLow
          }}
        />
      </View>
      <RowText
        first={weather[0]?.description}
        second={weatherType[weatherCondition]?.message}
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
  tempStyles,
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
  tempStyles: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold'
  },
  feels: {
    color: '#ffffff',
    fontSize: 24
  },
  highLow: {
    color: '#ffffff',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: 40
  },
  description: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#ffffff'
  },
  message: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#ffffff'
  }
})
export default CurrentWeather

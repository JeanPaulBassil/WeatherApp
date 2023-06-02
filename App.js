import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
//

const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={container}>
      {error ? (
        <ErrorItem error={error} />
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </View>
  )
}

const { container } = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App

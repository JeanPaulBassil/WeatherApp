/* eslint-disable prettier/prettier */
import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const upcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming weather</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default upcomingWeather

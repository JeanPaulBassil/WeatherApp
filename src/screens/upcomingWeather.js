import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Item from '../components/ListItem'

const toRender = ({ item }) => {
  return (
    <Item
      dtText={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
      condition={item.weather[0].main}
    />
  )
}

const UpcomingWeather = ({ weatherData }) => {
  console.log(weatherData)
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={toRender}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const { container, image } = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#58586e'
  },
  image: {
    // height: 100,
    // width: 100
    flex: 1,
    resizeMode: 'cover'
  }
})

export default UpcomingWeather

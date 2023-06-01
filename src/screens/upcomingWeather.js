import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Item from '../components/ListItem'

const DATA = [
  {
    dtText: '2023-02-18 12:00:00',
    main: {
      tempMax: 8.55,
      tempMin: 7.55
    },
    weather: [{ main: 'Clear' }]
  },
  {
    dtText: '2023-02-18 15:00:00',
    main: {
      tempMax: 8.55,
      tempMin: 7.55
    },
    weather: [{ main: 'Clouds' }]
  },
  {
    dtText: '2023-02-18 18:00:00',
    main: {
      tempMax: 8.55,
      tempMin: 7.55
    },
    weather: [{ main: 'Rain' }]
  }
]

const toRender = ({ item }) => {
  return (
    <Item
      dtText={item.dtText}
      max={item.main.tempMax}
      min={item.main.tempMin}
      condition={item.weather[0].main}
    />
  )
}

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcomingBackground.jpg')}
        style={image}
      >
        <Text>Upcoming weather</Text>
        <FlatList
          data={DATA}
          renderItem={toRender}
          keyExtractor={(item) => item.dtText}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const { container, image } = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    // height: 100,
    // width: 100
    flex: 1
  }
})

export default UpcomingWeather

import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  console.log(weatherData)
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={populationWrapper}>
          <IconText
            name="user"
            color="red"
            text={`${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={riseSetWrapper}>
          <IconText
            name="sunrise"
            color="white"
            text={moment(sunrise * 1000).format('h:mm:ss A')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            name="sunset"
            color="white"
            text={moment(sunset * 1000).format('h:mm:ss A')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const {
  container,
  imageLayout,
  cityName,
  countryName,
  cityText,
  populationText,
  populationWrapper,
  riseSetText,
  riseSetWrapper
} = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8B6C8'
  },
  cityName: {
    fontSize: 45,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  countryName: {
    fontSize: 35,
    color: '#D6D9DC'
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: '#F4F7FA'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  riseSetText: {
    fontSize: 20,
    color: '#D6D9DC'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-evenly'
  }
})

export default City

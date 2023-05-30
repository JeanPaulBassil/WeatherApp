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

const City = () => {
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/cityBackground.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={populationWrapper}>
          <IconText
            name="user"
            color="red"
            text="8000"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={riseSetWrapper}>
          <IconText
            name="sunrise"
            color="white"
            text="10:46:58am"
            bodyTextStyles={riseSetText}
          />
          <IconText
            name="sunset"
            color="white"
            text="17:28:15pm"
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
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  }
})

export default City

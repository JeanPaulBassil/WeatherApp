import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const Item = (props) => {
  // console.log(props)
  const { dtText, max, min, condition } = props
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={info}>
        <View style={dateTextWrapper}>
          <Text style={date}>{moment(dtText).format('dddd')}</Text>
          <Text style={date}>{moment(dtText).format('h:mm A')}</Text>
        </View>
        <Text style={temp}>
          {Math.round(min)}°C - {Math.round(max)}°C
        </Text>
      </View>
    </View>
  )
}

const { temp, date, item, info, dateTextWrapper } = StyleSheet.create({
  temp: {
    color: '#ffffff',
    fontSize: 20
  },
  date: {
    color: '#ffffff',
    fontSize: 15,
    marginBottom: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: '#58586e',
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Item

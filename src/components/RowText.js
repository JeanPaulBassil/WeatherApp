import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RowText = ({ first, second, styles }) => {
  const { wrapper, firstText, secondText } = styles
  return (
    <View style={wrapper}>
      <Text style={firstText}>{first}</Text>
      <Text style={secondText}>{second}</Text>
    </View>
  )
}

export default RowText

import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

const key = process.env.WEATHER_API_KEY

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`
      )
      const data = await response.json()
      setWeather(data)
    } catch (error) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, long])

  return [loading, error, weather]
}

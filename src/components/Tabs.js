import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#50C9CE',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#F2F3F4',
          borderTopColor: '#50C9CE'
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: '#F2F3F4'
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
          color: '#12263A'
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#50C9CE' : '#999999'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? '#50C9CE' : '#999999'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'map-pin'}
              size={25}
              color={focused ? '#50C9CE' : '#999999'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
export default Tabs

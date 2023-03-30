import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import FYP from './screens/FYP'
import Upload from './screens/Upload'
import Reels from './screens/Reels'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#000000',
          tabBarInactiveBackgroundColor: '#000000',
          tabBarStyle: {padding: 0.2, backgroundColor: '#022000', borderTopWidth: 0},
          tabBarIcon: ({focused}) => {
            let iconPath;
            let style;
            let unfocusedStyle = {borderRadius: 14};
            let focusedStyle = {borderRadius: 14, borderWidth: 1.5, borderColor: '#FFFFFF'};
            if (route.name === 'Home') {
              iconPath = focused ? require('./img/icons/home.png'): require('./img/icons/home-outline.png') 
            } else if (route.name === 'FYP') {
              iconPath = focused ? require('./img/icons/search.png') : require('./img/icons/search-outline.png')
            } else if (route.name === 'Upload') {
              iconPath = require('./img/icons/add.png') 
            } else if (route.name === 'Reels') {
              iconPath = focused ? require('./img/icons/reels.png') : require('./img/icons/reels-outline.png')
            } else if (route.name === 'Profile') {
              iconPath = require('./img/pfp.png')  
              style = focused ? focusedStyle : unfocusedStyle 
            }

            return <Image source={iconPath} style={[{height: 28, width: 28}, style]}/>
          },
      })}
      tab
      
    >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='FYP' component={FYP}/>
        <Tab.Screen name='Upload' component={Upload}/>
        <Tab.Screen name='Reels' component={Reels}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


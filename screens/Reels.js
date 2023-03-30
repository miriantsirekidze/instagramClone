import { View, Text, Image } from 'react-native'
import React from 'react'

const Reels = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../img/icons/attention.png')} style={{height: 150, width: 150}}/>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red'}}>Warning!</Text>
      <Text style={{fontSize: 28, fontWeight: 'bold', color: '#FFFFFF'}}>Under Maintenance.</Text>
    </View>
  )
}

export default Reels
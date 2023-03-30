import React, {useCallback} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync();

const height = Dimensions.get('window').height;

const Header = () => {

  const [fontsLoaded] = useFonts({
    Grandista: require('../assets/fonts/Grandista.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.positioning}>
        <Text style={styles.instagram}>Instagram</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../img/icons/like.png')} style={styles.image}/>
          <Image source={require('../img/icons/messenger.png')} style={styles.image}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000000',
    padding: 10,
  },
  image: {
    height: 26, 
    width: 26, 
    tintColor: '#FFFFFF',
    margin: 5
  },
  instagram: {
    fontFamily: 'Grandista', 
    fontSize: 24, 
    color: '#FAFAFA', 
    marginLeft: 10
  },
  imageContainer: {
    flexDirection: 'row', 
    alignSelf: 'center'
  },
  positioning: {
    justifyContent: 'space-between', 
    flexDirection: 'row'
  }
})
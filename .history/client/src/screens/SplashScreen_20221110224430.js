import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'


const SplashScreen = () => {
  return (
    <View>
        <StatusBar barStyle/>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
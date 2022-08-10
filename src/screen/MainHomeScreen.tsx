import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MainHomeScreen() {
    const navigation=useNavigation<any>()
  return (
    <View style={{  flex:1  ,justifyContent:'center',
    alignItems:'center'}}>
   <TouchableOpacity
   onPress={()=>navigation.navigate('HomeScreen')}
   style={styles.DatabaseTouchStyle}>
   <Text>GoTo RealtimeDtabase</Text>
   </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    DatabaseTouchStyle:{
      marginHorizontal:20,
      backgroundColor:'red',
      paddingVertical:20,
      paddingHorizontal:20,
      borderRadius:7,

      
    }
})
import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';



export default function HomeScreen() {
  
 
  
  
  return (
    <View style={{ flex: 2, backgroundColor: "white",}}>


      <View style={{ height: 120, backgroundColor: "white", }}>
        <View style={{backgroundColor: "red" , height : 120 , justifyContent: "center", alignItems: "center", }}>
          <Text style={{ fontSize : 25 }}  >RÖD</Text>
        </View>
        
      </View>

      <View style={{ height: 135, backgroundColor: "white", flexDirection: "row"}}>
        <View style={{backgroundColor: "green" , flex : 1, justifyContent: "down", alignItems: "right", }}>
          <Text style={{ fontSize : 35 }}  >GRÖN</Text>
        </View>
        <View style={{backgroundColor: "yellow" , flex : 1, }}>   
        </View>   
      </View>




      <View style={{ height: 80, backgroundColor: "white", flexDirection: "row"}}>
         <View style= {{ backgroundColor: "red", flex : 7, height: 80}}>
          </View>
        <View style={{backgroundColor: "black" , flex : 3, }}>   
          </View>  
          </View>

      

      <View style= {{ height: 380, backgroundColor: "skyblue" }}>
      </View>

      <View style= {{ backgroundColor: "darkorange" , height : 60, justifyContent: "center", alignItems: "flex-end"}}>
        <Text style={{ fontSize : 30,  }} >ORANGE</Text>
          </View>
        
     </View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  
  const [fruit, setFruit] = useState("kiwi");

  const [counter, setCounter] = useState(0);

  
  
  
  return (
    <View style={{ flex: 1, backgroundColor: "blue",}}>


      <View style={{ height: 150, backgroundColor: "white", flexDirection: "row"}}>
        <View style={{backgroundColor: "red" , flex : 1, justifyContent: "center", alignItems: "center" }}>
          <Text>A</Text>
          </View>
        <View style={{backgroundColor: "green" , flex : 1, justifyContent: "center", alignItems: "center"}}>
          <Text>B</Text>    
          </View>    
        <View style={{backgroundColor: "red" , flex : 1,justifyContent: "center", alignItems: "center" }}>
          <Text>C</Text>
          </View>
      
      </View>
      
      <View style= {{ backgroundColor: "yellow", height: 50, justifyContent: "center", alignItems: "center" }}>
        <Text>banan</Text>
        </View>

      <View style= {{ flex : 1 }}>
        <Text style={{ fontSize : 25, color: "red" }}  >( counter )</Text>
      </View>

      <View style= {{ backgroundColor: "red" , height : 60}}>

          <Button title="Press on me" onPress={() => {
            console.log("You pressed on the button"); 
            setFruit("Apelsin");
            setCounter(counter + 1);
            }}/>
          
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

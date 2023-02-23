import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
const globalVariable = "I am a global variable (in this screen file).";
const Users = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'John Doe',
  image: 'https://i.imgur.com/8ZfWgpy.jpg',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Mary Jane',
  image: 'https://i.imgur.com/BBLwOVm.png',
  message: 'Nam eleifend tellus dapibus, mollis orci, elementum enim.'
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Sean Paul',
  image: 'https://i.imgur.com/MIapmvB.png',
  message: 'Duis eget augue ornare, dignissim quam, consequat tellus.'
}];

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.zNTMtHrb} renderItem={({
        item
      }) => <View style={styles.MqAwDNdY}></View>} ItemSeparatorComponent={() => <View style={styles.FmoFCptd} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  zNTMtHrb: {
    position: "absolute",
    width: 100,
    height: 150
  },
  MqAwDNdY: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  FmoFCptd: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled3;
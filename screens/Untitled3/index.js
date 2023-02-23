import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

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
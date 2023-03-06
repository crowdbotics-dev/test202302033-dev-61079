import { FlatList } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.CGAvzULe} renderItem={({
        item
      }) => <View style={styles.JvVeUKIz}></View>} ItemSeparatorComponent={() => <View style={styles.mrzAujdR} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  CGAvzULe: {
    position: "absolute",
    width: 100,
    height: 150
  },
  JvVeUKIz: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  mrzAujdR: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled4;
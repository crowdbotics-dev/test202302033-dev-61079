import { FlatList } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.HgDCMxMJ} renderItem={() => <View style={styles.RFjCKQpz}></View>} ItemSeparatorComponent={() => <View style={styles.VbGNEaAY} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HgDCMxMJ: {
    position: "absolute",
    width: 100,
    height: 150
  },
  RFjCKQpz: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  VbGNEaAY: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled2;
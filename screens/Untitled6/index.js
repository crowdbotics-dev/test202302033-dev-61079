import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.XEzCDVOI} renderItem={() => <View style={styles.mEjmzgcT}></View>} ItemSeparatorComponent={() => <View style={styles.gsdswgQo} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  XEzCDVOI: {
    position: "absolute",
    width: 100,
    height: 150
  },
  mEjmzgcT: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  gsdswgQo: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled6;
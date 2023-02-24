import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.gFieLJqL} renderItem={() => <View style={styles.EGrgaGae}></View>} ItemSeparatorComponent={() => <View style={styles.ioyZmTOA} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gFieLJqL: {
    position: "absolute",
    width: 100,
    height: 150
  },
  EGrgaGae: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  ioyZmTOA: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled4;
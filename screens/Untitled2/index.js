import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  const Signups = useSelector(state => state.Signups);
  const Login = useSelector(state => state.Login);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.HgDCMxMJ} renderItem={({
        item
      }) => <View key={item.username} style={styles.RFjCKQpz}><Text>{item.username}</Text></View>} ItemSeparatorComponent={() => <View style={styles.VbGNEaAY} />} data={Signups} keyExtractor={item => item.username}>
       </FlatList>
          <Pressable onPress={() => navigation.navigation.navigate("undefined", {})}><View style={styles.XebbCEzU}></View></Pressable>
          <TextInput style={styles.iWarcvCo} value={Login.username}>
        </TextInput></ScrollView>
    </SafeAreaView>;
};

const a = 1;
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
  },
  XebbCEzU: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 23,
    top: 373
  },
  iWarcvCo: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 184,
    height: 41,
    position: "absolute",
    left: 43,
    top: 245
  }
});
export default Untitled2;
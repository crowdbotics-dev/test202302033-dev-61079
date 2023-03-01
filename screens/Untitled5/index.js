import { slice } from "./../Untitled2/sliceModels.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(slice.actions.api_v1_signup_create({
      "aa": "aa",
      "p": "v"
    }));
    dispatch(slice.actions.api_v1_login_create({
      "ttt": "ttt"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled5;
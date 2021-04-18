import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1 , marginTop:StatusBar.currentHeight}}>
            <View style={{ padding:16,backgroundColor:"green"}}> 
                <Text>search</Text>
            </View>
            <View style={{flex:1,padding:16,backgroundColor:"blue"}}>
                <Text>List</Text>
            </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});

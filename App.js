import React from 'react';
import { AppLoading, Asset, Font } form "expo"
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  state = {
    isLoadingComplete: false
  }
  render(){
    return{
      <View style={styles.container}>
        <Text> Open up App.js to start working on your appp!</Text>
      </View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

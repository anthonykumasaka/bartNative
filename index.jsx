import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import LandingPage from "./landing _page.jsx"

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <LandingPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'Bart Native', () => MyApp
);

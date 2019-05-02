import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Calculator extends Component {
  render() {
    return (
      <View>
        <View style={styles.button}>
          <Text>Hello World!</Text>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    height: 42
  }
})

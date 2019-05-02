import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions} from 'react-native'

export default class Calculator extends Component {

  state = {
    number: 0,
    previousNumber: 0,
  }

  numbersList = () => {
    return [...Array(9).keys()].map((number) => {
      return (
        <View key={number} style={styles.button}>
          <Text style={styles.buttonText}>{number}</Text>
        </View>
        )
    })
  }

  render() {
    return (
      <View>
        <View style={styles.input}>
          <TextInput />
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>*</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>/</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>=</Text>
        </View>
        {this.numbersList()}
      </View>
      )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    height: 70,
    width: 70,
  },
  buttonText: {
    fontSize: 50,
        textAlign: "center",
  },
  input: {
    padding: 20,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: 'stretch',
    width: width
  }
})

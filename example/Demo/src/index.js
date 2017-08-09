/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Api from './util/api';
import Picker from './picker';

export default class Demo extends Component {

  componentWillMount() {
    Api.post("user/findAllAreas", {})
      .then(function(response) {
        console.log(response);
        Picker.init({
          areas: JSON.stringify(response.data),
          selectedArea: '',
          onPickerEvent: data => console.log(data),
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}
        onPress={() => Picker.show()}>
          selectedArea
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

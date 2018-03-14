import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Collection from '../components/collection/collection';

export default class HomeScreen extends Component {
  handleCollectionClick = () => {
    this.props.navigation.navigate('Collection');
  };

  render() {
    return (
      <View style={styles.container}>
        <Collection name="Звери" onPress={this.handleCollectionClick} />
        <Collection name="Цифры" onPress={this.handleCollectionClick} />
        <Collection name="Буквы" onPress={this.handleCollectionClick} />
        <Collection name="Цвета" onPress={this.handleCollectionClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFEFE5'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

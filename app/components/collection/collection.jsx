import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Type from 'prop-types';

const styles = StyleSheet.create({
  view: {
    width: '40%',
    height: 130,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1FC8A9',
    borderRadius: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default class Collection extends Component {
  render() {
    return (
      <TouchableOpacity style={ styles.view } onPress={ this.props.onPress }>
        <Text style={ styles.text }>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

Collection.propTypes = {
  name: Type.string,
  onPress: Type.func
};

Collection.defaultProps = {
  name: 'Коллекция'
};

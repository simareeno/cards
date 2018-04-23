import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Type from 'prop-types';

export default class Collection extends Component {
  styles = StyleSheet.create({
    collection: this.props.style,
    view: {
      width: this.props.width,
      height: this.props.width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20
    },
    text: {
      color: '#333',
      fontSize: 20,
      fontWeight: 'bold'
    }
  })

  render() {
    return (
      <TouchableOpacity style={ this.styles.collection } onPress={ this.props.onPress }>
        <Text style={ this.styles.text }>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

Collection.propTypes = {
  name: Type.string,
  onPress: Type.func,
  width: Type.number,
  style: Type.shape({
    property: Type.string
  })
};

Collection.defaultProps = {
  name: 'Коллекция',
  width: 100
};

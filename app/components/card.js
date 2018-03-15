import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Type from 'prop-types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50
  },
  image: {
    width: width - 40,
    height: width - 40,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 50
  },
  text: {
    fontSize: 50,
    color: '#333',
    fontWeight: 'bold'
  }
});

export default class Card extends Component {
  render() {
    return (
      <View style={ styles.view }>
        <Image
          source={ this.props.image }
          style={ styles.image }
        />
        <Text style={ styles.text }>{this.props.name}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  name: Type.string,
  image: Type.number
};

Card.defaultProps = {
  name: 'Карточка'
};

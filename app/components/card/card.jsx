import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Type from 'prop-types';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default class Card extends Component {
  render() {
    return (
      <View style={ styles.view }>
        <Image
          source={ { uri: 'https://facebook.github.io/react/logo-og.png' } }
          style={ { width: 320, height: 320 } }
        />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  name: Type.string
};

Card.defaultProps = {
  name: 'Карточка'
};

/* eslint react/forbid-prop-types: 0 */
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Type from 'prop-types';
import Collection from '../components/collection';
import VARS from '../vars';

const { width } = Dimensions.get('window');

const collectionStyles = {
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  margin: VARS.unit / 2, // with container margin makes unit
  width: (width - (VARS.unit * 3)) / 2, // one column
  height: (width - (VARS.unit * 3)) / 2,
  borderRadius: 20
};

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Funny cards'
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingLeft: VARS.unit / 2,
      paddingRight: VARS.unit / 2,
      justifyContent: 'space-around',
      backgroundColor: VARS.colors.beige
    }
  });

  handleCollectionClick = () => {
    this.props.navigation.navigate('Collection');
  };

  render() {
    const { styles, handleCollectionClick } = this;
    return (
      <View style={ styles.container }>
        <Collection name='Звери' onPress={ handleCollectionClick } style={ collectionStyles } />
        <Collection name='Цифры' onPress={ handleCollectionClick } style={ collectionStyles } />
        <Collection name='Буквы' onPress={ handleCollectionClick } style={ collectionStyles } />
        <Collection name='Цвета' onPress={ handleCollectionClick } style={ collectionStyles } />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: Type.object
};

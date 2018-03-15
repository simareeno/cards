import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Type from 'prop-types';
import Collection from '../components/collection';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#FFEFE5'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default class HomeScreen extends Component {
  handleCollectionClick = () => {
    this.props.navigation.navigate('Collection');
  };

  render() {
    const collectionWidth = (width / 2) - 20;
    return (
      <View style={ styles.container }>
        <Collection name='Звери' onPress={ this.handleCollectionClick } width={ collectionWidth } />
        <Collection name='Цифры' onPress={ this.handleCollectionClick } width={ collectionWidth } />
        <Collection name='Буквы' onPress={ this.handleCollectionClick } width={ collectionWidth } />
        <Collection name='Цвета' onPress={ this.handleCollectionClick } width={ collectionWidth } />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: Type.object
};

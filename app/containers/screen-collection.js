import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from '../components/card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFEFE5'
  },
  card: {
    width: '100%',
    alignSelf: 'stretch'
  }
});

const image0 = require('../images/collections/numbers/0.png');
const image1 = require('../images/collections/numbers/1.png');
const image2 = require('../images/collections/numbers/2.png');
const image3 = require('../images/collections/numbers/3.png');
const image4 = require('../images/collections/numbers/4.png');
const image5 = require('../images/collections/numbers/5.png');
const image6 = require('../images/collections/numbers/6.png');
const image7 = require('../images/collections/numbers/7.png');
const image8 = require('../images/collections/numbers/8.png');
const image9 = require('../images/collections/numbers/9.png');

export default class CollectionScreen extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <ScrollView
          horizontal={ true }
          pagingEnabled={ true }
          scrollEventThrottle={ 16 }
          showsHorizontalScrollIndicator={ false }
        >
          <Card name='Ноль' image={ image0 } />
          <Card name='Один' image={ image1 } />
          <Card name='Два' image={ image2 } />
          <Card name='Три' image={ image3 } />
          <Card name='Четыре' image={ image4 } />
          <Card name='Пять' image={ image5 } />
          <Card name='Шесть' image={ image6 } />
          <Card name='Семь' image={ image7 } />
          <Card name='Восемь' image={ image8 } />
          <Card name='Девять' image={ image9 } />
        </ScrollView>
      </View>
    );
  }
}

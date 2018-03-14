import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Card from '../components/card/card';

export default class CollectionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          >
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    );
  }
}

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

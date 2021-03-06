import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Collection1 from '../../../../images/collection/collection1.jpg';

const { height, width } = Dimensions.get('window');
export default class Collection extends Component {
  render() {
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle} >MAIN FOODS</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Image source={Collection1} style={imageStyle} />
        </View>
      </View>
    );
  }
}
//480 x 300
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.33,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF'
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import Food1 from '../../../../images/collection/food1.jpg';
import Food2 from '../../../../images/collection/food2.jpg';
import Food3 from '../../../../images/collection/food3.jpg';

const { height, width } = Dimensions.get('window');

export default class Category extends Component {

    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', flex: 1, paddingTop: 5 }}>
                    <Text style={textStyle} >LIST OF FOODS</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight} >
                        <Image source={Food1} style={imageStyle}>
                            <Text style={Food2}>Fast 1</Text>
                        </Image>
                        <Image source={Food3} style={imageStyle}>
                            <Text style={cateTitle}>Fast 2</Text>
                        </Image>
                        <Image source={Food2} style={imageStyle}>
                            <Text style={cateTitle}>Fast 3</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}

//933 x 465
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
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
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});

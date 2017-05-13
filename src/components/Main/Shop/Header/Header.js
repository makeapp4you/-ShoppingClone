import React, { Component } from 'react';
import { View, Text, Dimensions, 
    TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import MenuIcon from '../../../../images/icon/menu1.png';
import Coin from '../../../../images/icon/coin.png';


const { height } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        const { headerStyle, row1, textStyle, inputStyle, imageStyle } = styles;
        return (
            <View style={headerStyle}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen} >
                        <Image source={MenuIcon} style={imageStyle} />
                    </TouchableOpacity>
                    <Text style={textStyle}> Shop of Phat Nguyen </Text>
                    <TouchableOpacity>
                        <Image source={Coin} style={imageStyle} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={inputStyle}
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ text })}
                    placeholder="what do you want?"
                    value={this.state.text}
                    
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerStyle: {
        height: height / 8,
        paddingTop: 10,
        backgroundColor: '#d2f9cd'
    },
    row1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 8,
        paddingRight: 8

    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#ff8a00',
        fontWeight: 'bold'
    },
    inputStyle: {
        height: height / 23,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10
    },
    imageStyle: {
        width: 30,
        height: 30
    }
});

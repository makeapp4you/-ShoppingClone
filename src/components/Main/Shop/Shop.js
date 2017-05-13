import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Shop extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text> This is Shop</Text>
                <TouchableOpacity onPress={this.openMenu.bind(this)}>
                    <Text> Open menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

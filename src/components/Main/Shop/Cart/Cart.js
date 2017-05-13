import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Cart extends Component {
    render() {
        return (
            <View style={styles.wrapper}> 
                <Text> This is Cart</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#5fc536',
        paddingTop: 20
    }
});

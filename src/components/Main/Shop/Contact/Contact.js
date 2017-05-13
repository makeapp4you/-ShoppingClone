import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Contact extends Component {
    render() {
        return (
            <View style={styles.wrapper}> 
                <Text> This is Contact</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#b2e1ab',
        paddingTop: 20
    }
});

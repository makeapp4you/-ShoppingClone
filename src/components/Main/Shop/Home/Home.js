import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}> 
                <Text> This is Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#52859f',
        paddingTop: 20
    }
});

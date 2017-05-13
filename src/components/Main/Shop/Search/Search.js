import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Search extends Component {
    render() {
        return (
            <View style={styles.wrapper}> 
                <Text> This is Search</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#9eae48',
        paddingTop: 20
    }
});

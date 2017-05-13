import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Menu extends Component {

    render() {
        return (
            <View style={styles.wrapper}> 
                <Text> This is Menu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#F5F9FB',
        paddingTop: 20
    }
});

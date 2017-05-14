import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Collection from './Collection';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}> 
                <Collection />
                <Collection />
                <Collection />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#dad5d2'
    }
});

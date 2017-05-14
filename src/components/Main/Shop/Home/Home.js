import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Collection from './Collection';
import Category from './Category';

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={styles.wrapper}> 
                <Collection />
                <Category />
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#dad5d2'
    }
});

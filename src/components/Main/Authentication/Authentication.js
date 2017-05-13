import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Authentication extends Component {
    goBack() {
        const { navigator } = this.props; 
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.wrapper}> 
                 <Text> This is Authentication</Text>
                <TouchableOpacity onPress={this.goBack.bind(this)}> 
                    <Text> Go to back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: '#50d07d',
        paddingTop: 20
    }
});

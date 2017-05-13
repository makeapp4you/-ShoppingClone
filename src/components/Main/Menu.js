import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Menu extends Component {
    goBack() {
        const { navigator } = this.props; 
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.wrapper}> 
                 <Text> This is Menu</Text>
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
        backgroundColor: '#F5F9FB',
        paddingTop: 20
    }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class ChangeInfo extends Component {
    goBack() {
        const { navigator } = this.props; 
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.wrapper}> 
                 <Text> This is ChangeInfo</Text>
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
        backgroundColor: '#d02552',
        paddingTop: 20
    }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Menu extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE-INFO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER-HISTORY' });
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text> This is Menu</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Goto AUTHENTICATION</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text>Goto HISTORY</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text>Goto CHANGE INFO</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#F5C815',
        paddingTop: 20
    }
});

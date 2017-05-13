import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Main extends Component {
    gotoMenu() {
        const { navigator } = this.props;
        navigator.push({ name: 'MENU' });
    }
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
                <Text> This is Main</Text>
                <TouchableOpacity onPress={this.gotoMenu.bind(this)}>
                    <Text>Goto Menu</Text>
                </TouchableOpacity>
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

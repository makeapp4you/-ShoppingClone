import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Main extends Component {
    gotoMenu() {
        const { navigator } = this.props;
        navigator.push({ name: 'MENU' });
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text> This is Main</Text>
                <TouchableOpacity onPress={this.gotoMenu.bind(this)}>
                    <Text>Goto Menu</Text>
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

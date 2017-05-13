import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';

import Drawer from 'react-native-drawer';


export default class Main extends Component {
    openControlPanel() {
        this.drawer.open();
    }
    render() {
        const { navigator } = this.props;
        return (
           <Drawer 
            ref={(ref) => { this.drawer = ref; }}
            content={<Menu navigator={navigator} />}
            openDrawerOffset={0.4}
            tapToClose
           >
           <Shop open={this.openControlPanel.bind(this)} />
           </Drawer>
        );
    }
}

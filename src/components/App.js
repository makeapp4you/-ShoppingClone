import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';


import Main from './Main/Main';

import Menu from './Main/Menu';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'MENU': return <Menu navigator={navigator} />;
                        default: return <Menu navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

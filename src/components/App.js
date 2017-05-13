import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';


import Main from './Main/Main';

import Menu from './Main/Menu';
import Authentication from './Main/Authentication/Authentication';
import OrderHistory from './Main/OrderHisttory/OrderHistory';
import ChangeInfo from './Main/changeInfo/ChangeInfo';

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
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        case 'ORDER-HISTORY': return <OrderHistory navigator={navigator} />;
                        case 'CHANGE-INFO': return <ChangeInfo navigator={navigator} />;
                        default: return <Menu navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

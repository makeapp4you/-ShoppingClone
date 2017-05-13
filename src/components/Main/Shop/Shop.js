import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';

import HomeIcon from '../../../images/icon/Home.png';
import HomeIcon1 from '../../../images/icon/Home1.png';

import CartIcon from '../../../images/icon/Cart.png';
import CartIcon1 from '../../../images/icon/Cart1.png';

import SearchIcon from '../../../images/icon/Search.png';
import SearchIcon1 from '../../../images/icon/Search1.png';

import ContactIcon from '../../../images/icon/Contact.png';
import ContactIcon1 from '../../../images/icon/Contact1.png';

import Header from './Header/Header';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { imageIcon } = styles;
        return (
            <View style={{ flex: 1 }}>
               <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={HomeIcon} style={imageIcon} />}
                        renderSelectedIcon={() => <Image source={HomeIcon1} style={imageIcon} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={CartIcon} style={imageIcon} />}
                        renderSelectedIcon={() => <Image source={CartIcon1} style={imageIcon} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={SearchIcon} style={imageIcon} />}
                        renderSelectedIcon={() => <Image source={SearchIcon1} style={imageIcon} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={ContactIcon} style={imageIcon} />}
                        renderSelectedIcon={() => <Image source={ContactIcon1} style={imageIcon} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageIcon: {
        width: 30,
        height: 30
    }
});

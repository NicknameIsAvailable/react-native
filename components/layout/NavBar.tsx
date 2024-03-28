import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';

const NavBar = () => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Best app" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
    );
};

export default NavBar;
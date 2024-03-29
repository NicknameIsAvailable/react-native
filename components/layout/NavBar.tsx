import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import AddTask from '../tasks/AddTask';

const NavBar = () => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Best app" />
            <AddTask/>
        </Appbar.Header>
    );
};

export default NavBar;
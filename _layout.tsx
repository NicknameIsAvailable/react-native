import React, { ReactNode } from 'react';
import { View } from 'react-native';
import NavBar from './components/layout/NavBar';
import Container from './components/ui/Container';

interface Props {
    children: ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <View>
            <NavBar />
            <Container>
                {children}
            </Container>
        </View>
    );
};

export default RootLayout;

function createBottomTabNavigator() {
    throw new Error('Function not implemented.');
}

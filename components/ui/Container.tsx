import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
    children: ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
})

export default Container;
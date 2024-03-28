import React from 'react';
import { Button, PaperProvider, Snackbar, Text } from 'react-native-paper';
import App from './App';
import { View } from 'react-native';

const Main = () => {
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    return (
        <View>
            <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo',
                onPress: () => {
                    // Do something
                },
            }}>
            Hey there! I'm a Snackbar.
            </Snackbar>
        </View>
    );
};

export default Main;
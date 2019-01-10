import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottom: 1,
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', //makes children rows instead of the default of columns
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };

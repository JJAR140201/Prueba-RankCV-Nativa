import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type NavbarsProps = {
    brand: string;
};

const Navbars: React.FC<NavbarsProps> = ({ brand }) => {
    return (
        <View style={styles.navbar}>
            <View style={styles.container}>
                <Text style={styles.brand}>{brand}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'black',
    },
    container: {
        padding: 10,
    },
    brand: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
    },
});

export default Navbars;

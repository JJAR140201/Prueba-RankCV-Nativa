import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

type Character = {
  image: string,
  name: string,
  species: string,
  location: {
    name: string,
  },
};

type CharactersProps = {
  characters: Character[],
};

const Characters: React.FC<CharactersProps> = ({ characters = [] }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            {characters.map((item: Character, index: number) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <View style={styles.hr} />
                    <Text>Species: {item.species}</Text>
                    <Text>Location: {item.location.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    card: {
        width: 160,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        elevation: 3, // Agrega sombra en Android
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 5,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 5,
    },
});

export default Characters;

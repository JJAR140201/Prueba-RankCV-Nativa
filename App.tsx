import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Navbars from './components/Navbars';
import Characters from './components/Characters';
import Paginacion from './components/Paginacion';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [info, setInfo] = useState<any>({});
  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url: string) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const onPrevious = () => {
    if (info && info.prev) {
      fetchCharacters(info.prev);
    }
  };

  const onNext = () => {
    if (info && info.next) {
      fetchCharacters(info.next);
    }
  };

  return (
    <View style={styles.container}>
      <Navbars brand="Rick and Morty" />
      <Paginacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Characters characters={characters} />
      <Paginacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default App;

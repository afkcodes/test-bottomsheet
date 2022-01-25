import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native';
import { Text } from 'react-native-svg';
import Artist from '~components/Artist/Artist';
import Discover from '~components/Discover/Discover';
import { RootStackParamList } from '~components/Navigator/TabNavigators/types';
import Popular from '~components/Popular/Popular';
import RadioList from '~components/RadioList/RadioList';
import Recently from '~components/Recently/Recently';
import SearchBar from '~components/SearchBar/SearchBar';
import Main from '~screens/Main';

type favoriteScreenProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
const Home = () => {
  const navigation = useNavigation<favoriteScreenProp>();
  return (
    <Main>
      <SearchBar />
      <Discover />
      <Popular />
      <Recently />
      <Artist />
      <RadioList />
      <Button title="hello" onPress={() => navigation.navigate('Favorites')}>
        <Text>Press here</Text>
      </Button>
    </Main>
  );
};

export default Home;

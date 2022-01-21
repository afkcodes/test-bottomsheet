import React from 'react';
import Artist from '~components/Artist/Artist';
import Discover from '~components/Discover/Discover';
import Popular from '~components/Popular/Popular';
import RadioList from '~components/RadioList/RadioList';
import Recently from '~components/Recently/Recently';
import Main from '~screens/Main';
const Home = () => (
  <Main>
    <>
      <Discover />
      <Popular />
      <Artist />
      <Recently />
      <RadioList />
    </>
  </Main>
);

export default Home;

// const styles = StyleSheet.create({});

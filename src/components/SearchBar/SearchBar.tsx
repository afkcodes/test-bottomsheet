import { SearchNormal1, CloseSquare } from 'iconsax-react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import MbView from '~components/shared/MbView/MbView';
import { COLORS } from '~config/config';
import { DarkOrLight, ThemeSliceType } from '~states/types';
import useStore from '~states/useStore';
import { styles } from './searchbar.styles';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const searchRef = React.createRef<TextInput>();
  const theme = useStore((state) => state.theme) as keyof ThemeSliceType;
  const currentThemeStyles = useStore((state) => state[theme]) as DarkOrLight;
  const color = theme === 'dark' ? 'rgb(177,179,180)' : COLORS.dark[600];

  const onClear = () => {
    searchRef.current?.clear();
    setInputText('');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (value: string) => {
    // console.log(value);
  };

  return (
    <MbView style={styles.inputContainerStyle}>
      <TextInput
        ref={searchRef}
        style={[styles.inputStyles, currentThemeStyles.color]}
        placeholder="Search Your Favorite Station"
        placeholderTextColor={color}
        onChangeText={setInputText}
        value={inputText}
        selectionColor={color}
        onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
      />
      <TouchableOpacity onPress={onClear} activeOpacity={0.8}>
        {inputText.length > 0 ? (
          <CloseSquare color={color} variant="Outline" size={28} />
        ) : (
          <SearchNormal1 color={color} variant="Outline" size={28} />
        )}
      </TouchableOpacity>
    </MbView>
  );
};

export default SearchBar;

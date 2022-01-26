/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeSliceType } from './types';
import { StoreSlice } from '../useStore';

const createThemeSlice: StoreSlice<ThemeSliceType> = (set, get) => ({
  theme: 'dark',
  dark: {
    backgroundColor: { backgroundColor: 'rgb(26, 26, 26)' },
    color: { color: 'rgb(159,159,159)' }
  },
  light: {
    backgroundColor: { backgroundColor: 'rgb(231,234,239)' },
    color: { color: 'rgb(26, 26, 26)' }
  },

  toggleTheme: () => {
    set((prev: ThemeSliceType) => ({ ...prev, theme: 'dark' }));
  }
});

export default createThemeSlice;

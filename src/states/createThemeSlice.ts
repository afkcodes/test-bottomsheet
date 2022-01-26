import { GetState, SetState } from 'zustand';
import { ThemeSliceType } from './types';
import { MyState } from './useStore';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createThemeSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  theme: 'light',
  dark: {
    backgroundColor: { backgroundColor: 'rgb(22,22,22)' },
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

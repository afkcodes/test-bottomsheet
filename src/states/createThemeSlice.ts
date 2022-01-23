import { GetState, SetState } from 'zustand';
import { ThemeSliceType } from './types';
import { MyState } from './useStore';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createThemeSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  theme: 'light',
  dark: {
    backgroundColor: { backgroundColor: 'rgb(26, 26, 26)' },
    color: { color: 'rgb(177,179,180)' }
  },
  light: {
    backgroundColor: { backgroundColor: 'rgb(236,239,241)' },
    color: { color: 'rgb(26, 26, 26)' }
  },

  toggleTheme: () => {
    set((prev: ThemeSliceType) => ({ ...prev, theme: 'dark' }));
  }
});

export default createThemeSlice;

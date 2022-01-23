import create from 'zustand';

import createThemeSlice from './createThemeSlice';
import { ThemeSliceType } from './types';

export type MyState = ThemeSliceType;
import { subscribeWithSelector } from 'zustand/middleware';

const useStore = create<MyState>(
  subscribeWithSelector((set, get) => ({
    ...createThemeSlice(set, get)
  }))
);

export default useStore;

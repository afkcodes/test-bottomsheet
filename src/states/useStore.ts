import create, { GetState, SetState } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import createBaseSlice from './baseSlice/createBaseSlice';
import { BaseSliceType } from './baseSlice/types';
import createThemeSlice from './themeSlice/createThemeSlice';
import { ThemeSliceType } from './themeSlice/types';

export type StoreState = BaseSliceType & ThemeSliceType;

export type StoreSlice<T> = (set: SetState<StoreState>, get: GetState<StoreState>) => T;

const useStore = create<StoreState>(
  subscribeWithSelector((set, get) => ({
    ...createThemeSlice(set, get),
    ...createBaseSlice(set, get)
  }))
);

export default useStore;

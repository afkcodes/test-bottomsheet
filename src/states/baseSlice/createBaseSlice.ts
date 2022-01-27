/* eslint-disable @typescript-eslint/no-unused-vars */
import { StoreSlice } from '../useStore';
import { BaseSliceType } from './types';

const createBaseSlice: StoreSlice<BaseSliceType> = (set, get) => ({
  keyboardState: false,

  setIsKeyboardOpen: (state: boolean) => {
    set((prev: BaseSliceType) => ({ ...prev, keyboardState: state }));
  }
});
export default createBaseSlice;

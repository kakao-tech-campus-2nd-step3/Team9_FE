import { create } from 'zustand';

import type { Mode } from '@/types';

type ModeState = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const useModeStore = create<ModeState>((set) => ({
  mode: 'USER',
  setMode: (mode) => set({ mode }),
}));

export default useModeStore;

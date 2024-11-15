import { create } from 'zustand';

import getUserType from '@/apis/users/getUserType';
import type { Mode } from '@/types/user';

type ModeState = {
  mode: Mode;
  setMode: () => Promise<void>;
};

const useModeStore = create<ModeState>((set) => ({
  mode: 'user',

  setMode: async () => {
    try {
      const { userType } = await getUserType();
      set({ mode: userType === 'USER' ? 'user' : 'artist' });
    } catch (error) {
      console.error('mode 세팅 실패:', error);
    }
  },
}));

export default useModeStore;

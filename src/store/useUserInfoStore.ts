import { create } from 'zustand';

type UserInfoState = {
  birthDate: string;
  setBirthDate: (birthDate: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
};

const useUserInfoStore = create<UserInfoState>((set) => ({
  birthDate: '',
  setBirthDate: (birthDate) => set({ birthDate }),
  phone: '',
  setPhone: (phone) => set({ phone }),
  email: '',
  setEmail: (email) => set({ email }),
}));

export default useUserInfoStore;

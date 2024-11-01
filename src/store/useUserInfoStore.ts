import { create } from 'zustand';

type UserInfoState = {
  name: string;
  setName: (name: string) => void;
  birthdate: string;
  setBirthdate: (birthDate: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  address: string;
  setAddress: (address: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  interests: string[];
  setInterests: (interest: string) => void;
  image: string;
  setImage: (image: string) => void;
  clearUserInfo: () => void;
};

const useUserInfoStore = create<UserInfoState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
  birthdate: '',
  setBirthdate: (birthdate) => set({ birthdate }),
  phone: '',
  setPhone: (phone) => set({ phone }),
  email: '',
  setEmail: (email) => set({ email }),
  address: '',
  setAddress: (address) => set({ address }),
  nickname: '',
  setNickname: (nickname) => set({ nickname }),
  interests: [],
  setInterests: (interest) =>
    set((state) => ({
      interests: [...state.interests, interest],
    })),
  image: '',
  setImage: (image) => set({ image }),

  clearUserInfo: () =>
    set({
      name: '',
      birthdate: '',
      phone: '',
      email: '',
      address: '',
      nickname: '',
      interests: [],
      image: '',
    }),
}));

export default useUserInfoStore;

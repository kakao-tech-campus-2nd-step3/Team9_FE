import { create } from 'zustand';

type UserState = {
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
  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;
  clearUserInfo: () => void;
};

const useUserStore = create<UserState>((set) => ({
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
  imageUrl: '',
  setImageUrl: (imageUrl) => set({ imageUrl }),

  clearUserInfo: () =>
    set({
      name: '',
      birthdate: '',
      phone: '',
      email: '',
      address: '',
      nickname: '',
      interests: [],
      imageUrl: '',
    }),
}));

export default useUserStore;

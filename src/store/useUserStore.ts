import { create } from 'zustand';

import useGetUserDetails from '@/apis/users/useGetUserDetails';

type UserState = {
  name: string;
  setName: (name: string) => void;

  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;

  nickname: string;
  setNickname: (nickname: string) => void;

  email: string;
  setEmail: (email: string) => void;

  birthdate: string;
  setBirthdate: (birthDate: string) => void;

  phone: string;
  setPhone: (phone: string) => void;

  address: string;
  setAddress: (address: string) => void;

  interests: string[];
  setInterests: (interest: string) => void;

  setUserDetails: () => void;

  clearUserInfo: () => void;
};

const useUserStore = create<UserState>((set) => ({
  name: '',
  setName: (name) => set({ name }),

  imageUrl: '',
  setImageUrl: (imageUrl) => set({ imageUrl }),

  nickname: '',
  setNickname: (nickname) => set({ nickname }),

  email: '',
  setEmail: (email) => set({ email }),

  birthdate: '',
  setBirthdate: (birthdate) => set({ birthdate }),

  phone: '',
  setPhone: (phone) => set({ phone }),

  address: '',
  setAddress: (address) => set({ address }),

  interests: [],
  setInterests: (interest) =>
    set((state) => ({
      interests: [...state.interests, interest],
    })),

  setUserDetails: async () => {
    const { data, error } = await useGetUserDetails();

    if (error) {
      console.error('유저 상세 정보를 가져오지 못했습니다. ', error);
      return;
    }

    set({
      name: data.name,
      imageUrl: data.userImageUrl,
      nickname: data.nickname,
      email: data.email,
      birthdate: data.birthdate,
      interests: data.hashTags || [],
    });
  },

  clearUserInfo: () =>
    set({
      name: '',
      imageUrl: '',
      nickname: '',
      email: '',
      birthdate: '',
      phone: '',
      address: '',
      interests: [],
    }),
}));

export default useUserStore;

import { create } from 'zustand';

type StudentInfoState = {
  birthDate: string;
  setBirthDate: (birthDate: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  univName: string;
  setUnivName: (univName: string) => void;
  major: string;
  setMajor: (major: string) => void;
  intro: string;
  setIntro: (intro: string) => void;
};

const useStudentInfoStore = create<StudentInfoState>((set) => ({
  birthDate: '',
  setBirthDate: (birthDate) => set({ birthDate }),
  phone: '',
  setPhone: (phone) => set({ phone }),
  email: sessionStorage.getItem('certifiedEmail') || '',
  setEmail: (email) => set({ email }),
  univName: sessionStorage.getItem('univName') || '',
  setUnivName: (univName) => set({ univName }),
  major: '',
  setMajor: (major) => set({ major }),
  intro: '',
  setIntro: (intro) => set({ intro }),
}));

export default useStudentInfoStore;

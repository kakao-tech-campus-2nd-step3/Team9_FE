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
  about: string;
  setAbout: (about: string) => void;
};

const useStudentInfoStore = create<StudentInfoState>((set) => ({
  birthDate: '',
  setBirthDate: (birthDate) => set({ birthDate }),
  phone: '',
  setPhone: (phone) => set({ phone }),
  email: '',
  setEmail: (email) => set({ email }),
  univName: '',
  setUnivName: (univName) => set({ univName }),
  major: '',
  setMajor: (major) => set({ major }),
  about: '',
  setAbout: (about) => set({ about }),
}));

export default useStudentInfoStore;

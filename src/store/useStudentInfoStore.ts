import { create } from 'zustand';

type StudentInfoState = {
  univEmail: string;
  setUnivEmail: (email: string) => void;
  univName: string;
  setUnivName: (univName: string) => void;
  major: string;
  setMajor: (major: string) => void;
  about: string;
  setAbout: (about: string) => void;
  clearStudentInfo: () => void;
};

const useStudentInfoStore = create<StudentInfoState>((set) => ({
  univEmail: '',
  setUnivEmail: (univEmail) => set({ univEmail }),
  univName: '',
  setUnivName: (univName) => set({ univName }),
  major: '',
  setMajor: (major) => set({ major }),
  about: '',
  setAbout: (about) => set({ about }),
  clearStudentInfo: () =>
    set({
      univEmail: '',
      univName: '',
      major: '',
      about: '',
    }),
}));

export default useStudentInfoStore;

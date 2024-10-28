import { create } from 'zustand';

type BusinessInfoState = {
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  businessNumber: string;
  setBusinessNumber: (businessNumber: string) => void;
  startDate: string;
  setStartDate: (startDate: string) => void;
  presidentName: string;
  setPresidentName: (presidentName: string) => void;
  about: string;
  setAbout: (about: string) => void;
  clearBusinessInfo: () => void;
};

const useBusinessInfoStore = create<BusinessInfoState>((set) => ({
  phone: '',
  setPhone: (phone) => set({ phone }),

  email: '',
  setEmail: (email) => set({ email }),

  businessNumber: '',
  setBusinessNumber: (businessNumber) => set({ businessNumber }),

  startDate: '',
  setStartDate: (startDate) => set({ startDate }),

  presidentName: '',
  setPresidentName: (presidentName) => set({ presidentName }),

  about: '',
  setAbout: (about) => set({ about }),

  clearBusinessInfo: () =>
    set({
      phone: '',
      email: '',
      businessNumber: '',
      startDate: '',
      presidentName: '',
      about: '',
    }),
}));

export default useBusinessInfoStore;

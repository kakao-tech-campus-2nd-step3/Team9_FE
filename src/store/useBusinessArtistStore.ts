import { create } from 'zustand';

type BusinessArtistState = {
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

const useBusinessArtistStore = create<BusinessArtistState>((set) => ({
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
      businessNumber: '',
      startDate: '',
      presidentName: '',
      about: '',
    }),
}));

export default useBusinessArtistStore;

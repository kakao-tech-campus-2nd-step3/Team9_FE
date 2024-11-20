import { create } from 'zustand';

type SearchModalState = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

const useSearchModalStore = create<SearchModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),
}));

export default useSearchModalStore;

import { create } from 'zustand';

const states = {
  box: [],
};

export const useAppStore = create((set) => ({
  ...states,
  addToBox: (pokemon) => {
    set((prev) => ({
      box: [...prev.box, pokemon],
    }));
  },
}));

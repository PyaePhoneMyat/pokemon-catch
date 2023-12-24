import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const states = {
  box: [],
};

export const useAppStore = create(
  persist(
    (set) => ({
      ...states,
      addToBox: (pokemon) => {
        set((prev) => ({
          box: [...prev.box, pokemon],
        }));
      },
    }),
    {
      name: 'pokemon-catch',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

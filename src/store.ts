import { create } from 'zustand';

type usePointsStoreTypes = {
  puntosTotal: number;
  setPuntosTotal: (puntos: number) => void;
};

export const usePointsStore = create<usePointsStoreTypes>((set) => ({
  puntosTotal: 0,
  setPuntosTotal: (puntos: number) => set(() => ({ puntosTotal: puntos })),
}));

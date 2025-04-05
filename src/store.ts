import { create } from 'zustand';

type usePointsStoreTypes = {
  puntosTotal: number;
  setPuntosTotal: (puntos: number) => void;
  puntosPartida: number;
};

export const usePointsStore = create<usePointsStoreTypes>((set) => ({
  puntosTotal: 0,
  setPuntosTotal: (puntos: number) => set(() => ({ puntosTotal: puntos })),
  puntosPartida: (() => {
    const puntosRaw = localStorage.getItem('puntos');
    return puntosRaw ? JSON.parse(puntosRaw) : 0;
  })(),
}));

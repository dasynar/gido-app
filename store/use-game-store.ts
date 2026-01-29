import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameStore = create()(
  persist(
    (set) => ({
      coins: 250,
      coinBank: 0,
      meters: { home: 30, personal: 20, fun: 20, style: 15, health: 15 },
      addCoins: (amount: number) => set((state: any) => ({ coins: state.coins + amount })),
      collectBank: () => set((state: any) => ({ coins: state.coins + state.coinBank, coinBank: 0 })),
      tick: () => set((state: any) => ({ coinBank: state.coinBank + 1 })),
    }),
    { name: 'gido-storage' }
  )
);

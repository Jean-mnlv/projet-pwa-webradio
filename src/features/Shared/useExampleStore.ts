import { create } from "zustand";

type ExampleState = {
  value: number;
  increment: () => void;
};

export const useExampleStore = create<ExampleState>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
}));

import { create } from "zustand";
const useRadioPlayerStore = create((set) => ({
  isPlaying: false,
  setPlaying: (playing) => set({ isPlaying: playing }),
}));
export default useRadioPlayerStore;

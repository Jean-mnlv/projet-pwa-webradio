import { create } from "zustand";

type RadioPlayerState = {
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
};

const useRadioPlayerStore = create<RadioPlayerState>((set) => ({
  isPlaying: false,
  setPlaying: (playing) => set({ isPlaying: playing }),
}));

export default useRadioPlayerStore;

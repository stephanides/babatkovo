import create from "zustand";
import { CybexPriamType } from "../../shared/types";

type State = {
  cybexPriam: CybexPriamType;
  cybexMat: number;
  changeCybexModel: (cybexPriam: CybexPriamType) => void;
  changeCybexMat: (cybexMat: number) => void;
};

export const useStore = create<State>((set) => ({
  cybexPriam: "classic",
  cybexMat: 0,
  changeCybexModel: (cybexPriam: CybexPriamType) => set({ cybexPriam }),
  changeCybexMat: (cybexMat: number) => set({ cybexMat }),
}));

import { create } from "zustand";

export const StateStore = create((set) => ({
    dropdown: false,
    setDropdown: () => set((state) => ({ dropdown: !(state.dropdown) }))
}))


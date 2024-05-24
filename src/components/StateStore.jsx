import { create } from "zustand";

export const useDropdownStore = create((set) => ({
    dropdown: false,
    setDropdown: () => set((state) => ({ dropdown: !(state.dropdown) }))
}))
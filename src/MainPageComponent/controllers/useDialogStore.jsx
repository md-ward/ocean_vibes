import { create } from "zustand";

const useDialogStore = create((set) => ({
  isOpen: false,
  content: null,
  open: (content) => set({ isOpen: true, content }),
  close: () => {
    setTimeout(() => {
      set({ content: null });
    }, 300);
    set({ isOpen: false });
  },
}));

export default useDialogStore;
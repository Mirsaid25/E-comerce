import { create } from "zustand";

interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    title: string;
    description: string;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    title: "",
    description: "",
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false }),
}));

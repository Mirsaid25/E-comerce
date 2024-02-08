import { create } from "zustand";

interface useStoreModalStore {
    isOpen: boolean;
    onOpen: ({ item, desk }: { item: string; desk: string }) => void;
    onclose: () => void;
    title: string;
    description: string;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    title: "",
    description: "",
    onOpen: ({ item, desk }) => set({ isOpen: true, title: item, description: desk }),
    onclose: () => set({ isOpen: false }),
}));

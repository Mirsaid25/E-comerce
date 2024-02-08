"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const Storemodal = () => {
    const storeModals = useStoreModal();

    return (
        <Modal
            title={storeModals.title}
            description={storeModals.description}
            isOpen={storeModals.isOpen}
            onClose={storeModals.onclose}
        >
            Future Create Store Form
        </Modal>
    );
};

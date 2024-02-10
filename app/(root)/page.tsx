"use client";

import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    // const isOpen = useStoreModal((state) => state.isOpen);

    const handler = () => {
        onOpen();
    };

    return (
        <div className="p-4">
            <Button onClick={() => handler()}>Open Modal</Button>
        </div>
    );
};

export default SetupPage;

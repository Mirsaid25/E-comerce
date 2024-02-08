"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    // const isOpen = useStoreModal((state) => state.isOpen);

    const handler = (item: string, desk: string) => {
        onOpen({ item, desk });
    };

    return (
        <div className="p-4">
            <button onClick={() => handler("1", "deck")}>111111</button>
            <button className="ml-10" onClick={() => handler("1", "deck2")}>
                222222
            </button>
        </div>
    );
};

export default SetupPage;

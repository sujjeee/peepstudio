'use client';

import React from "react";
import { PeepContextProvider } from "@/lib/context/PeepContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PeepContextProvider>
            {children}
        </PeepContextProvider>
    );
}
"use client";

import React from "react";
import { PreloadContext } from "@/components/ui/arc-preloader-hero";

export function ArcPreloaderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <PreloadContext.Provider value={{ isPreloading: false, phase: "done" }}>
            {children}
        </PreloadContext.Provider>
    );
}

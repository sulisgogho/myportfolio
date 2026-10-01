'use client';

import { ReactLenis } from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.1,
            duration: 1.0,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            // @ts-ignore
            smoothTouch: false
        }}>
            {children}
        </ReactLenis>
    );
}

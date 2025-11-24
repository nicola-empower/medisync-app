import React from 'react';

interface GlassPanelProps {
    children: React.ReactNode;
    className?: string;
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
    return (
        <div className={`glass-panel p-5 flex flex-col gap-5 overflow-y-auto ${className}`}>
            {children}
        </div>
    );
}

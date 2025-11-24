import React from 'react';

export default function Header() {
    return (
        <header className="flex justify-between items-center mb-5 p-[10px_20px] bg-white/50 rounded-[50px] backdrop-blur-[5px]">
            <div className="flex items-center gap-2.5 font-semibold">
                <div className="w-[35px] h-[35px] bg-[var(--color-action)] text-white rounded-full flex items-center justify-center text-sm">
                    ME
                </div>
                <span><strong>Primary Carer</strong> (You)</span>
            </div>
            <div className="text-sm text-[var(--color-brand)]">
                <i className="fa-solid fa-user-clock mr-1"></i> Next Shift: <strong>Sarah (Sat 8am)</strong>
            </div>
        </header>
    );
}

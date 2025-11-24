import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon?: string;
    colorClass?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, icon, colorClass = 'text-gray-800', children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[4px] flex justify-center items-center z-[100] animate-[fadeIn_0.3s]">
            <div className="bg-white w-[90%] max-w-[450px] p-6 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-[popIn_0.3s_cubic-bezier(0.175,0.885,0.32,1.275)]">
                <button
                    onClick={onClose}
                    className="bg-transparent border-none text-[#999] float-right cursor-pointer text-2xl leading-none hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className={`text-xl font-semibold mb-5 flex items-center gap-2 ${colorClass}`}>
                    {icon && <i className={icon}></i>}
                    {title}
                </h2>
                {children}
            </div>
        </div>
    );
}

"use client";
import React, { useState } from 'react';

interface StatusManagerProps {
    onLog: (message: string) => void;
}

export default function StatusManager({ onLog }: StatusManagerProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const wellnessTags = [
        '😊 Happy', '😌 Calm', '😠 Agitated', '😵‍💫 Confused',
        '😴 Drowsy', '🤕 Numbness/Tingles', '🚽 Incontinence'
    ];

    const activityTags = [
        '📺 TV', '🌳 Walk', '🩺 Physio', '👨‍👩‍👧 Family Visit'
    ];

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const logWellness = () => {
        if (selectedTags.length === 0) return alert("Select tags first.");
        onLog(`Updated Status: ${selectedTags.join(', ')}`);
        setSelectedTags([]);
    };

    return (
        <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-face-smile text-[var(--color-brand)]"></i> Current Status
            </h3>

            <div className="flex flex-wrap gap-1.5">
                {wellnessTags.map(tag => (
                    <span
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-[20px] text-xs border border-[#ccc] cursor-pointer transition-all
              ${selectedTags.includes(tag) ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)]' : 'bg-white/50 hover:bg-white/80'}
            `}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-xs text-[var(--text-muted)] mt-1 mb-0.5">Context / Activity:</p>

            <div className="flex flex-wrap gap-1.5">
                {activityTags.map(tag => (
                    <span
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-[20px] text-xs border border-[#ccc] cursor-pointer transition-all
              ${selectedTags.includes(tag) ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)]' : 'bg-white/50 hover:bg-white/80'}
            `}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <button
                onClick={logWellness}
                className="mt-2 p-2 w-full rounded-lg border border-[#ccc] cursor-pointer bg-white hover:bg-gray-50 text-sm font-medium"
            >
                Update Status Log
            </button>
        </div>
    );
}

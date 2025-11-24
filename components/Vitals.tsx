"use client";
import React, { useState } from 'react';

export default function Vitals() {
    const [isEditing, setIsEditing] = useState(false);
    const [vitals, setVitals] = useState({
        hr: 72,
        o2: 98,
        status: 'Stable'
    });

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                    <i className="fa-solid fa-heart-pulse text-[var(--color-action)]"></i> Vitals
                </h3>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-xs text-[var(--color-action)] hover:underline"
                >
                    {isEditing ? 'Cancel' : 'Update'}
                </button>
            </div>

            {isEditing ? (
                <form onSubmit={handleSave} className="bg-white/50 p-2.5 rounded-xl flex flex-col gap-2 text-sm">
                    <div className="flex justify-between items-center">
                        <label>HR:</label>
                        <input
                            type="number"
                            value={vitals.hr}
                            onChange={(e) => setVitals({ ...vitals, hr: Number(e.target.value) })}
                            className="w-16 p-1 rounded border border-gray-300"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label>O2:</label>
                        <input
                            type="number"
                            value={vitals.o2}
                            onChange={(e) => setVitals({ ...vitals, o2: Number(e.target.value) })}
                            className="w-16 p-1 rounded border border-gray-300"
                        />
                    </div>
                    <button type="submit" className="bg-[var(--color-action)] text-white rounded p-1 mt-1">Save</button>
                </form>
            ) : (
                <div className="bg-white/50 p-2.5 rounded-xl flex justify-between text-[0.85rem]">
                    <span><strong>Status:</strong> {vitals.status}</span>
                    <span><strong>HR:</strong> {vitals.hr} bpm</span>
                    <span><strong>O2:</strong> {vitals.o2}%</span>
                </div>
            )}
        </div>
    );
}

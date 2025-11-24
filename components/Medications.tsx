"use client";
import React, { useState } from 'react';

interface Med {
    id: number;
    name: string;
    time: string;
    details?: string;
    taken: boolean;
}

interface MedicationsProps {
    onLog: (message: string, type?: 'info' | 'alert' | 'warn') => void;
}

export default function Medications({ onLog }: MedicationsProps) {
    const [meds, setMeds] = useState<Med[]>([
        { id: 1, name: 'Keppra 500mg', time: '08:00 AM', details: 'With Food', taken: false },
        { id: 2, name: 'Daily Multi', time: '08:00 AM', taken: false },
        { id: 3, name: 'Clobazam', time: '08:00 PM', details: 'Night Routine', taken: false },
    ]);
    const [isAdding, setIsAdding] = useState(false);
    const [newMedName, setNewMedName] = useState('');
    const [newMedTime, setNewMedTime] = useState('');

    const toggleMed = (id: number) => {
        setMeds(meds.map(med => {
            if (med.id === id) {
                const isTaken = !med.taken;
                onLog(
                    isTaken
                        ? `<i class="fa-solid fa-check" style="color:var(--color-success)"></i> Marked <strong>${med.name}</strong> as taken.`
                        : `Unmarked <strong>${med.name}</strong>.`
                );
                return { ...med, taken: isTaken };
            }
            return med;
        }));
    };

    const addMed = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMedName && newMedTime) {
            const newMed: Med = {
                id: Date.now(),
                name: newMedName,
                time: newMedTime,
                taken: false
            };
            setMeds([...meds, newMed]);
            setIsAdding(false);
            setNewMedName('');
            setNewMedTime('');
            onLog(`Added new medication: <strong>${newMedName}</strong>`);
        }
    };

    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                    <i className="fa-solid fa-pills text-[var(--color-action)]"></i> Medications
                </h3>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="text-xs text-[var(--color-action)] hover:underline"
                >
                    {isAdding ? 'Cancel' : '+ Add'}
                </button>
            </div>

            {isAdding && (
                <form onSubmit={addMed} className="bg-white/50 p-3 rounded-xl mb-2 flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Medication Name"
                        className="p-2 rounded border border-gray-300 text-sm"
                        value={newMedName}
                        onChange={(e) => setNewMedName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Time (e.g. 09:00 AM)"
                        className="p-2 rounded border border-gray-300 text-sm"
                        value={newMedTime}
                        onChange={(e) => setNewMedTime(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-[var(--color-action)] text-white rounded p-2 text-sm font-semibold">Add Medication</button>
                </form>
            )}

            <div className="flex flex-col gap-2.5">
                {meds.map(med => (
                    <div
                        key={med.id}
                        onClick={() => toggleMed(med.id)}
                        className={`
              flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all duration-200 border-l-4 border-transparent
              ${med.taken ? 'border-l-[var(--color-success)] opacity-60 bg-[#f0fdf4]' : 'bg-white/50 hover:-translate-y-0.5 hover:bg-white/80'}
            `}
                    >
                        <div className="flex flex-col">
                            <strong>{med.name}</strong>
                            <small className="text-[var(--text-muted)] text-xs">
                                {med.time} {med.details && `• ${med.details}`}
                            </small>
                        </div>
                        <div className={`
              w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center
              ${med.taken ? 'bg-[var(--color-success)] border-[var(--color-success)] text-white' : 'border-[#ccc]'}
            `}>
                            {med.taken && <i className="fa-solid fa-check text-xs"></i>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

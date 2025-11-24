"use client";
import React, { useState } from 'react';

interface Note {
    id: number;
    date: string;
    text: string;
}

interface NotepadProps {
    onLog: (message: string) => void;
}

export default function Notepad({ onLog }: NotepadProps) {
    const [notes, setNotes] = useState<Note[]>([
        { id: 1, date: '18/11', text: 'Neurology: Review meds in 3 months.' }
    ]);
    const [newNote, setNewNote] = useState('');

    const saveNote = () => {
        if (newNote.trim()) {
            const date = new Date().toLocaleDateString([], { day: '2-digit', month: '2-digit' });
            setNotes([{ id: Date.now(), date, text: newNote }, ...notes]);
            onLog("Posted a new appointment note.");
            setNewNote('');
        }
    };

    return (
        <div className="flex flex-col gap-2.5 flex-1">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-user-doctor text-[var(--color-action)]"></i> Appt. Notepad
            </h3>

            <div className="max-h-[100px] overflow-y-auto mb-2.5 flex flex-col gap-1.5">
                {notes.map(note => (
                    <div key={note.id} className="bg-white/40 p-2 rounded-lg text-[0.8rem] border-l-[3px] border-l-[var(--color-action)]">
                        <strong>{note.date}:</strong> {note.text}
                    </div>
                ))}
            </div>

            <div className="mt-auto">
                <textarea
                    className="w-full h-[100px] bg-white/60 border border-black/10 rounded-xl p-2.5 font-sans resize-none mb-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-action)]"
                    placeholder="Doctor said..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                ></textarea>
                <button
                    onClick={saveNote}
                    className="w-full p-2 bg-[var(--color-action)] text-white border-none rounded-lg cursor-pointer text-sm font-semibold hover:opacity-90"
                >
                    Post Note
                </button>
            </div>
        </div>
    );
}

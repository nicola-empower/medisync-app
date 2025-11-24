"use client";
import React, { useState } from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export default function HandoverTasks() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: 'Washing in machine (needs hung)', completed: false },
        { id: 2, text: 'Grass needs cut', completed: false },
        { id: 3, text: 'Trim nails', completed: false },
    ]);
    const [newTask, setNewTask] = useState('');

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    return (
        <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-clipboard-list text-[var(--color-action)]"></i> Handover Tasks
            </h3>

            <div className="bg-white/50 p-4 rounded-xl flex flex-col gap-1">
                {tasks.map(task => (
                    <div key={task.id} className="flex items-center gap-2.5 py-1.5 border-b border-black/5 text-[0.9rem] last:border-none">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="accent-[var(--color-action)]"
                        />
                        <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
                    </div>
                ))}
                <input
                    type="text"
                    className="w-full p-2 rounded-lg border border-[#ddd] mt-1.5 bg-white/80 text-sm"
                    placeholder="+ Add task (Enter)"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={addTask}
                />
            </div>
        </div>
    );
}

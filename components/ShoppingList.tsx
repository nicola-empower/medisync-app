"use client";
import React, { useState } from 'react';

interface ShoppingListProps {
    onLog: (message: string) => void;
}

export default function ShoppingList({ onLog }: ShoppingListProps) {
    const [items, setItems] = useState([
        { id: 1, text: 'Dish soap', completed: false },
        { id: 2, text: 'Toilet roll', completed: false },
    ]);
    const [newItem, setNewItem] = useState('');

    const toggleItem = (id: number) => {
        setItems(items.map(i => i.id === id ? { ...i, completed: !i.completed } : i));
    };

    const addItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newItem.trim()) {
            setItems([...items, { id: Date.now(), text: newItem, completed: false }]);
            onLog(`Added <strong>${newItem}</strong> to shopping list.`);
            setNewItem('');
        }
    };

    return (
        <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-cart-shopping text-[var(--color-action)]"></i> Shopping List
            </h3>

            <div>
                <div className="flex flex-col">
                    {items.map(item => (
                        <div key={item.id} className="flex items-center gap-2.5 py-1.5 border-b border-black/5 text-[0.9rem]">
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleItem(item.id)}
                                className="accent-[var(--color-action)]"
                            />
                            <span className={item.completed ? 'line-through text-gray-400' : ''}>{item.text}</span>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    className="w-full p-2 rounded-lg border border-[#ddd] mt-1.5 bg-white/80 text-sm"
                    placeholder="+ Add item (Enter)"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyDown={addItem}
                />
            </div>
        </div>
    );
}

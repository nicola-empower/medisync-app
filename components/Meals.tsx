"use client";
import React, { useState } from 'react';

interface MealsProps {
    onLog: (message: string) => void;
}

export default function Meals({ onLog }: MealsProps) {
    const [meals, setMeals] = useState({
        lunch: { prepared: false, eaten: false },
        dinner: { prepared: false, eaten: false }
    });

    const toggleMeal = (meal: 'lunch' | 'dinner', type: 'prepared' | 'eaten') => {
        const newState = !meals[meal][type];
        setMeals({
            ...meals,
            [meal]: { ...meals[meal], [type]: newState }
        });

        if (newState) {
            const mealName = meal.charAt(0).toUpperCase() + meal.slice(1);
            const actionName = type.charAt(0).toUpperCase() + type.slice(1);
            onLog(`Marked meal status: <strong>${mealName} ${actionName}</strong>.`);
        }
    };

    return (
        <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-utensils text-[var(--color-action)]"></i> Meals
            </h3>

            <div className="bg-white/40 p-3 rounded-xl">
                <strong className="flex items-center gap-2 mb-2"><i className="fa-solid fa-sun"></i> Lunch</strong>
                <div className="flex gap-2">
                    <button
                        onClick={() => toggleMeal('lunch', 'prepared')}
                        className={`px-2.5 py-1.5 rounded-[15px] text-xs border border-[var(--color-brand)] transition-all
              ${meals.lunch.prepared ? 'bg-[var(--color-action)] text-white border-[var(--color-action)]' : 'bg-transparent hover:bg-[var(--color-brand)] hover:text-white'}
            `}
                    >
                        Prepared
                    </button>
                    <button
                        onClick={() => toggleMeal('lunch', 'eaten')}
                        className={`px-2.5 py-1.5 rounded-[15px] text-xs border border-[var(--color-brand)] transition-all
              ${meals.lunch.eaten ? 'bg-[var(--color-action)] text-white border-[var(--color-action)]' : 'bg-transparent hover:bg-[var(--color-brand)] hover:text-white'}
            `}
                    >
                        Eaten
                    </button>
                </div>
            </div>

            <div className="bg-white/40 p-3 rounded-xl">
                <strong className="flex items-center gap-2 mb-2"><i className="fa-solid fa-moon"></i> Dinner</strong>
                <div className="flex gap-2">
                    <button
                        onClick={() => toggleMeal('dinner', 'prepared')}
                        className={`px-2.5 py-1.5 rounded-[15px] text-xs border border-[var(--color-brand)] transition-all
              ${meals.dinner.prepared ? 'bg-[var(--color-action)] text-white border-[var(--color-action)]' : 'bg-transparent hover:bg-[var(--color-brand)] hover:text-white'}
            `}
                    >
                        Prepared
                    </button>
                    <button
                        onClick={() => toggleMeal('dinner', 'eaten')}
                        className={`px-2.5 py-1.5 rounded-[15px] text-xs border border-[var(--color-brand)] transition-all
              ${meals.dinner.eaten ? 'bg-[var(--color-action)] text-white border-[var(--color-action)]' : 'bg-transparent hover:bg-[var(--color-brand)] hover:text-white'}
            `}
                    >
                        Eaten
                    </button>
                </div>
            </div>
        </div>
    );
}

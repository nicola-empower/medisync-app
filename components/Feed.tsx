import React from 'react';

export interface FeedItem {
    id: number;
    html: string;
    type: 'info' | 'alert' | 'warn';
    time: string;
    user: string;
}

interface FeedProps {
    items: FeedItem[];
}

export default function Feed({ items }: FeedProps) {
    return (
        <div className="flex flex-col gap-2.5 flex-1 min-h-[200px]">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-clock-rotate-left text-[var(--color-brand)]"></i> Real-Time Feed
            </h3>

            <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2.5">
                {items.map(item => (
                    <div
                        key={item.id}
                        className={`
              p-3 rounded-xl border-l-4 animate-[fadeIn_0.4s_ease]
              ${item.type === 'alert' ? 'border-l-[var(--color-alert)] bg-[rgba(255,230,230,0.6)]' :
                                item.type === 'warn' ? 'border-l-[var(--color-warn)] bg-[rgba(255,247,230,0.6)]' :
                                    'border-l-[var(--color-action)] bg-white/40'}
            `}
                    >
                        <div className="flex justify-between text-[0.7rem] text-[var(--text-muted)] mb-1">
                            <span>{item.user}</span> <span>{item.time}</span>
                        </div>
                        <div
                            className="text-[0.9rem] leading-[1.4]"
                            dangerouslySetInnerHTML={{ __html: item.html }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

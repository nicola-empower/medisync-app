"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import GlassPanel from '@/components/GlassPanel';
import Vitals from '@/components/Vitals';
import Medications from '@/components/Medications';
import Meals from '@/components/Meals';
import IncidentReport from '@/components/IncidentReport';
import StatusManager from '@/components/StatusManager';
import Feed, { FeedItem } from '@/components/Feed';
import HandoverTasks from '@/components/HandoverTasks';
import ShoppingList from '@/components/ShoppingList';
import Notepad from '@/components/Notepad';

export default function Home() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    {
      id: 1,
      html: 'Prepared Lunch. Ate about half. Seemed in good spirits.',
      type: 'info',
      time: '10:30 AM',
      user: 'Sister Sarah'
    },
    {
      id: 2,
      html: '<i class="fa-solid fa-check" style="color:var(--color-success)"></i> Morning Meds (Keppra) taken.',
      type: 'info',
      time: '08:00 AM',
      user: 'System'
    }
  ]);

  const addToFeed = (html: string, type: 'info' | 'alert' | 'warn' = 'info') => {
    const newItem: FeedItem = {
      id: Date.now(),
      html,
      type,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'You (Just now)'
    };
    setFeedItems(prev => [newItem, ...prev]);
  };

  return (
    <main className="p-5 min-h-screen">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-5 h-auto lg:h-[85vh]">

        {/* Left Column */}
        <GlassPanel>
          <Vitals />
          <Medications onLog={addToFeed} />
          <Meals onLog={addToFeed} />
        </GlassPanel>

        {/* Center Column */}
        <GlassPanel>
          <IncidentReport onLog={addToFeed} />
          <StatusManager onLog={addToFeed} />
          <Feed items={feedItems} />
        </GlassPanel>

        {/* Right Column */}
        <GlassPanel>
          <HandoverTasks />
          <ShoppingList onLog={addToFeed} />
          <Notepad onLog={addToFeed} />
        </GlassPanel>

      </div>
    </main>
  );
}

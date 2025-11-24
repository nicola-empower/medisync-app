"use client";
import React, { useState } from 'react';
import Modal from './Modal';

interface IncidentReportProps {
    onLog: (message: string, type: 'alert' | 'warn') => void;
}

export default function IncidentReport({ onLog }: IncidentReportProps) {
    const [showSeizureModal, setShowSeizureModal] = useState(false);
    const [showFallModal, setShowFallModal] = useState(false);

    // Seizure Form State
    const [seizureData, setSeizureData] = useState({
        type: 'Tonic-Clonic (Convulsive)',
        duration: 1,
        loc: false,
        injury: false,
        action: ''
    });

    // Fall Form State
    const [fallData, setFallData] = useState({
        location: '',
        cause: '',
        injury: false,
        called999: false
    });

    const submitSeizure = () => {
        const html = `
      <strong>SEIZURE REPORT</strong><br>
      Type: ${seizureData.type} | Duration: ${seizureData.duration} mins<br>
      LOC: ${seizureData.loc ? "Yes" : "No"} | <em>${seizureData.action || "Monitored."}</em>
    `;
        onLog(html, 'alert');
        setShowSeizureModal(false);
        // Reset form
        setSeizureData({ type: 'Tonic-Clonic (Convulsive)', duration: 1, loc: false, injury: false, action: '' });
    };

    const submitFall = () => {
        const html = `
      <strong>FALL REPORTED</strong><br>
      Loc: ${fallData.location} | Cause: ${fallData.cause}<br>
      <strong>Injury Visible: ${fallData.injury ? "YES" : "No"}</strong>
    `;
        onLog(html, 'warn');
        setShowFallModal(false);
        // Reset form
        setFallData({ location: '', cause: '', injury: false, called999: false });
    };

    return (
        <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-[1.1rem] text-[var(--color-brand)] flex items-center gap-2 m-0">
                <i className="fa-solid fa-triangle-exclamation text-[var(--color-alert)]"></i> Report Incident
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
                <button
                    onClick={() => setShowSeizureModal(true)}
                    className="p-4 border-none rounded-xl font-semibold cursor-pointer text-left flex items-center gap-2.5 transition-all text-white text-sm bg-[var(--color-alert)] shadow-[0_4px_12px_rgba(239,68,68,0.3)] hover:-translate-y-0.5 hover:opacity-90"
                >
                    <i className="fa-solid fa-bolt fa-lg"></i> Seizure
                </button>
                <button
                    onClick={() => setShowFallModal(true)}
                    className="p-4 border-none rounded-xl font-semibold cursor-pointer text-left flex items-center gap-2.5 transition-all text-white text-sm bg-[var(--color-warn)] shadow-[0_4px_12px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:opacity-90"
                >
                    <i className="fa-solid fa-person-falling fa-lg"></i> Fall
                </button>
            </div>

            {/* Seizure Modal */}
            <Modal
                isOpen={showSeizureModal}
                onClose={() => setShowSeizureModal(false)}
                title="Report Seizure"
                icon="fa-solid fa-bolt"
                colorClass="text-[var(--color-alert)]"
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Type & Appearance</label>
                        <select
                            className="w-full p-2.5 border border-[#ccc] rounded-lg"
                            value={seizureData.type}
                            onChange={(e) => setSeizureData({ ...seizureData, type: e.target.value })}
                        >
                            <option>Tonic-Clonic (Convulsive)</option>
                            <option>Absence (Staring)</option>
                            <option>Focal (Twitching)</option>
                            <option>Unknown</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Duration</label>
                        <input
                            type="range"
                            className="w-full"
                            min="0" max="10"
                            value={seizureData.duration}
                            onChange={(e) => setSeizureData({ ...seizureData, duration: Number(e.target.value) })}
                        />
                        <div className="text-right font-bold text-[var(--color-brand)]">{seizureData.duration} mins</div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Details</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={seizureData.loc}
                                    onChange={(e) => setSeizureData({ ...seizureData, loc: e.target.checked })}
                                /> Loss of Consc.
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={seizureData.injury}
                                    onChange={(e) => setSeizureData({ ...seizureData, injury: e.target.checked })}
                                /> Injury Sustained
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Action / Meds Given</label>
                        <textarea
                            className="w-full p-2.5 border border-[#ccc] rounded-lg"
                            placeholder="e.g. Recovery position, Buccal Midazolam..."
                            value={seizureData.action}
                            onChange={(e) => setSeizureData({ ...seizureData, action: e.target.value })}
                        ></textarea>
                    </div>

                    <button
                        onClick={submitSeizure}
                        className="w-full p-3 text-white border-none rounded-lg cursor-pointer font-semibold bg-[var(--color-alert)]"
                    >
                        LOG URGENT REPORT
                    </button>
                </div>
            </Modal>

            {/* Fall Modal */}
            <Modal
                isOpen={showFallModal}
                onClose={() => setShowFallModal(false)}
                title="Report Fall"
                icon="fa-solid fa-person-falling"
                colorClass="text-[var(--color-warn)]"
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Location</label>
                        <input
                            type="text"
                            className="w-full p-2.5 border border-[#ccc] rounded-lg"
                            placeholder="e.g. Bathroom, Garden stairs"
                            value={fallData.location}
                            onChange={(e) => setFallData({ ...fallData, location: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Circumstances</label>
                        <textarea
                            className="w-full p-2.5 border border-[#ccc] rounded-lg"
                            placeholder="e.g. Slipped on rug, legs gave way, dizziness..."
                            value={fallData.cause}
                            onChange={(e) => setFallData({ ...fallData, cause: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-sm text-[var(--text-muted)]">Outcome</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={fallData.injury}
                                    onChange={(e) => setFallData({ ...fallData, injury: e.target.checked })}
                                /> Injury Visible
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={fallData.called999}
                                    onChange={(e) => setFallData({ ...fallData, called999: e.target.checked })}
                                /> Called 999/111
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={submitFall}
                        className="w-full p-3 text-white border-none rounded-lg cursor-pointer font-semibold bg-[var(--color-warn)]"
                    >
                        LOG INCIDENT
                    </button>
                </div>
            </Modal>
        </div>
    );
}

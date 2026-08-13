import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Printer,
  Download,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { TIMETABLE_DATA, SCHOOL_INFO } from '../data/schoolData';
import { TimetableSection } from '../types';

export const TimetablePage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'+2 First Year' | '+2 Second Year'>('+2 First Year');
  const [selectedSection, setSelectedSection] = useState<'A' | 'B'>('A');

  const currentSchedule = TIMETABLE_DATA.find(
    (t) => t.year === selectedYear && t.section === selectedSection
  );

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (!currentSchedule) return;
    let csv = `UNIQUE HIGHER SECONDARY SCHOOL - TIMETABLE\n`;
    csv += `Year: ${currentSchedule.year} | Section: ${currentSchedule.section}\n\n`;
    csv += `Period,Time Slot,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday\n`;

    currentSchedule.periods.forEach((p) => {
      csv += `Period ${p.periodNumber},"${p.timeSlot}","${p.mon}","${p.tue}","${p.wed}","${p.thu}","${p.fri}","${p.sat}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `Unique_School_Timetable_${selectedYear.replace(/\+/g, '').replace(/\s+/g, '_')}_Sec_${selectedSection}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Printable Header - hidden on screen, visible when printing */}
      <div className="hidden print:block p-6 text-center border-b-2 border-slate-900">
        <h1 className="text-2xl font-bold font-serif uppercase">{SCHOOL_INFO.name}</h1>
        <p className="text-xs">{SCHOOL_INFO.address}</p>
        <p className="text-sm font-bold mt-2">
          ACADEMIC TIMETABLE - {selectedYear} (SECTION {selectedSection})
        </p>
      </div>

      {/* Screen Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Academic Schedule
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            +2 Higher Secondary Timetable
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Official daily period schedule for +2 First Year and +2 Second Year (Sections A & B).
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 print:hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Year Selection Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase font-mono mr-2">Select Year:</span>
              {(['+2 First Year', '+2 Second Year'] as const).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
                    selectedYear === year
                      ? 'bg-[#0b1f3a] text-white shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Section Selection Tabs */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase font-mono mr-2">Select Section:</span>
              {(['A', 'B'] as const).map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`w-9 h-9 rounded-lg font-bold text-xs transition-all ${
                    selectedSection === sec
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Sec {sec}
                </button>
              ))}
            </div>

            {/* Print & Download Buttons */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <button
                onClick={handlePrint}
                className="flex-1 lg:flex-none bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>PRINT TIMETABLE</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 lg:flex-none bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD TIMETABLE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Timetable Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#0b1f3a]" />
              <h2 className="font-bold text-lg text-[#0b1f3a] font-serif">
                {selectedYear} – SECTION {selectedSection} SCHEDULE
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Verified Daily Period Grid
            </span>
          </div>

          {/* Timetable Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs text-left border-collapse">
              <thead className="bg-[#0b1f3a] text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-3 border-r border-blue-900 w-16 text-center">Period</th>
                  <th className="py-3 px-3 border-r border-blue-900 w-36">Time Slot</th>
                  <th className="py-3 px-3 border-r border-blue-900">Monday</th>
                  <th className="py-3 px-3 border-r border-blue-900">Tuesday</th>
                  <th className="py-3 px-3 border-r border-blue-900">Wednesday</th>
                  <th className="py-3 px-3 border-r border-blue-900">Thursday</th>
                  <th className="py-3 px-3 border-r border-blue-900">Friday</th>
                  <th className="py-3 px-3">Saturday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                {currentSchedule?.periods.map((p) => {
                  const isBreak = p.mon.includes('BREAK');
                  if (isBreak) {
                    return (
                      <tr key={p.periodNumber} className="bg-amber-50/80 font-bold text-amber-950">
                        <td className="py-2.5 px-3 border-r border-amber-200 text-center font-mono">BREAK</td>
                        <td className="py-2.5 px-3 border-r border-amber-200 font-mono text-xs">{p.timeSlot}</td>
                        <td colSpan={6} className="py-2.5 px-3 text-center tracking-wider font-mono">
                          --- REFRESHMENT BREAK ---
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={p.periodNumber} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 border-r border-slate-200 text-center font-extrabold text-blue-900 font-mono">
                        P{p.periodNumber}
                      </td>
                      <td className="py-3 px-3 border-r border-slate-200 font-mono text-[11px] text-slate-600">
                        {p.timeSlot}
                      </td>
                      <td className="py-3 px-3 border-r border-slate-200">{p.mon}</td>
                      <td className="py-3 px-3 border-r border-slate-200">{p.tue}</td>
                      <td className="py-3 px-3 border-r border-slate-200">{p.wed}</td>
                      <td className="py-3 px-3 border-r border-slate-200">{p.thu}</td>
                      <td className="py-3 px-3 border-r border-slate-200">{p.fri}</td>
                      <td className="py-3 px-3">{p.sat}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pending Confirmation Note as mandated */}
          <div className="pt-2 flex items-start gap-2 text-xs text-slate-500">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Note: Unclear handwriting or minor period swaps are subject to <strong className="text-slate-800">Pending confirmation</strong> from the academic vice-principal's desk.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

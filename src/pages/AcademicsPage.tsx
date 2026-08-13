import React from 'react';
import { BookOpen, CheckCircle2, Clock, Calendar, ArrowRight, FileSpreadsheet } from 'lucide-react';
import { VERIFIED_SUBJECTS } from '../data/schoolData';
import { PageId } from '../types';

interface AcademicsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Academic Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Academics & Subject Overview
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Rigorous +2 Higher Secondary Science curriculum focused on conceptual clarity, individual laboratory experimentation, and disciplined routine.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Academic Overview */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold font-serif text-[#0b1f3a]">Academic Overview</h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            The academic program at Unique Higher Secondary School follows a structured approach designed for +2 First Year and +2 Second Year science students. Each day features 7 dedicated learning periods covering theoretical lectures, practical laboratory work, problem-solving tutorials, and language development.
          </p>
        </div>

        {/* Verified Subjects Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h2 className="text-2xl font-bold font-serif text-[#0b1f3a]">Verified Subjects</h2>
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
              8 Verified Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_SUBJECTS.map((sub) => (
              <div
                key={sub.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span className="bg-blue-50 text-blue-900 px-2 py-0.5 rounded">{sub.type}</span>
                    <span className="text-amber-600">{sub.code}</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#0b1f3a] font-serif mt-2">{sub.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{sub.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Syllabus Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule & Routine Highlights */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold font-serif text-[#0b1f3a]">Weekly Academic Routine</h2>
              <p className="text-xs text-slate-600 mt-1">
                Mon - Sat schedule featuring morning lectures, break, lab practicals, and doubt clearance.
              </p>
            </div>
            <button
              onClick={() => onNavigate('timetable')}
              className="bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-amber-400" />
              <span>View Full Timetable</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-blue-900 block">Morning Theory Classes</span>
              <p className="text-slate-600">07:00 AM – 10:00 AM (4 Periods)</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">Refreshment Break</span>
              <p className="text-amber-800">10:00 AM – 10:30 AM</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-blue-900 block">Labs & Language / Doubt Session</span>
              <p className="text-slate-600">10:30 AM – 12:00 PM (2 Periods)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

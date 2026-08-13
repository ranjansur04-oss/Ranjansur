import React from 'react';
import { BookOpen, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { VERIFIED_SUBJECTS } from '../data/schoolData';
import { PageId } from '../types';

interface CoursesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Academic Streams
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Courses & Streams Architecture
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Offering Higher Secondary (+2) Science stream with flexible subject combinations in PCMB / PCMIT.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Stream Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="bg-blue-100 text-blue-900 font-mono text-xs font-bold px-3 py-1 rounded-full uppercase">
                Higher Secondary
              </span>
              <h2 className="text-2xl font-bold font-serif text-[#0b1f3a] mt-2">+2 Science Stream</h2>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
              Duration: 2 Years (+2 First & Second Year)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-sm text-[#0b1f3a] font-serif uppercase tracking-wider">
                Compulsory Subjects
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>English (Compulsory Language)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Odia (Compulsory Language)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Physics (Core Science Theory & Lab)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chemistry (Core Science Theory & Lab)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-sm text-[#0b1f3a] font-serif uppercase tracking-wider">
                Elective Science Subjects
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mathematics (Calculus, Algebra, Geometry)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Biology (Botany & Zoology Theory & Lab)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Information Technology (IT Elective)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Missing / Unconfirmed Streams Notice as strictly required */}
        <div className="bg-amber-50/80 p-6 rounded-xl border border-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 space-y-1">
            <p className="font-bold">Official Stream Architecture Note:</p>
            <p>
              Official course and stream information will be updated soon. Additional subject combinations and vocational electives will be published following official council updates.
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="bg-[#0b1f3a] text-white p-8 rounded-xl flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg font-serif text-amber-300">Enquire About +2 Science Seats</h3>
            <p className="text-xs text-slate-300 mt-1">Submit an online enquiry or visit the school office in Kuakhia.</p>
          </div>
          <button
            onClick={() => onNavigate('admissions')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase px-5 py-3 rounded shadow shrink-0 flex items-center gap-2"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

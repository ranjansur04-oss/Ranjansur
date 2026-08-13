import React from 'react';
import { UserCheck, Briefcase, Mail, Phone, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { FACULTY_MEMBERS, SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../types';

interface FacultyPageProps {
  onNavigate: (page: PageId) => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Academic Mentorship
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Faculty & Department Directory
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Dedicated educators providing guidance, laboratory training, and discipline for +2 Science candidates.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Recruitment Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 p-6 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-950 text-amber-400 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg font-serif">Faculty Hiring Open (Physics, Chemistry, Zoology)</h3>
              <p className="text-xs text-slate-900 font-medium mt-0.5">
                Qualified educators are invited to send biodata to <span className="font-bold underline">{SCHOOL_INFO.email}</span>. Salary: Negotiable.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('careers')}
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase px-5 py-3 rounded-lg shadow shrink-0 flex items-center gap-2"
          >
            <span>View Job Vacancies</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY_MEMBERS.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 bg-blue-50 text-blue-900 rounded">
                    {fac.subject} Department
                  </span>
                  {fac.isVacant && (
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                      Hiring Open
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-[#0b1f3a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0b1f3a] font-serif">{fac.designation}</h3>
                    <p className="text-xs text-slate-500">{fac.qualification || 'Faculty profile will be updated soon.'}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {fac.biography}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between items-center">
                <span>Unique H.S. School</span>
                <span className="font-mono text-blue-800 font-semibold">{fac.subject}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

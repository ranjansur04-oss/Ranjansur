import React from 'react';
import { JOB_VACANCIES, SCHOOL_INFO } from '../data/schoolData';
import { Briefcase, Mail, Phone, Send, Sparkles, CheckCircle2, Award, DollarSign } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> We Are Hiring
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Careers & Faculty Recruitment
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Join our dedicated academic faculty team at Unique Higher Secondary School and help shape young minds in Science education.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Recruitment Banner Card */}
        <div className="bg-gradient-to-br from-[#0b1f3a] via-blue-900 to-[#0b1f3a] text-white p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-amber-400/50 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-blue-800/80 pb-6">
            <div>
              <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
                Job Vacancy Drive 2026-27
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white mt-1">
                Teaching Positions Available
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Empowering Education • Inspiring Excellence • Building Future Leaders
              </p>
            </div>

            <div className="bg-amber-500 text-slate-950 p-4 rounded-xl font-bold text-center shadow-lg shrink-0">
              <span className="block text-[10px] uppercase tracking-widest font-mono">Salary Package</span>
              <span className="text-xl font-extrabold font-serif uppercase">NEGOTIABLE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOB_VACANCIES.map((vac) => (
              <div
                key={vac.id}
                className="bg-white text-slate-900 p-6 rounded-xl shadow-md border-t-4 border-amber-500 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-900 font-bold font-mono text-[10px] px-2.5 py-1 rounded uppercase">
                      {vac.type}
                    </span>
                    <span className="text-amber-600 font-mono text-xs font-bold">Open</span>
                  </div>

                  <h3 className="font-extrabold text-xl font-serif text-[#0b1f3a]">
                    {vac.subject}
                  </h3>
                  <p className="text-xs font-bold text-slate-700">{vac.position}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{vac.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Remuneration:</span>
                    <span className="text-amber-600 font-mono">NEGOTIABLE</span>
                  </div>

                  <a
                    href={`mailto:${vac.email}?subject=Application for ${vac.subject} Lecturer Position at Unique Higher Secondary School`}
                    className="w-full bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>SEND BIODATA</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold font-serif text-[#0b1f3a] border-b border-slate-100 pb-3">
            Application Instructions & Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#0b1f3a] font-serif uppercase tracking-wider">
                How to Apply
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Prepare your updated curriculum vitae / biodata specifying academic qualifications and teaching experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Send biodata directly to <strong className="font-mono text-blue-900">{SCHOOL_INFO.email}</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Selected candidates will be contacted for an interview and classroom demonstration session.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-sm text-[#0b1f3a] font-serif uppercase tracking-wider">
                Recruitment Desk Contacts
              </h3>
              <p className="text-xs text-slate-600">
                For queries regarding faculty vacancies, contact the school management helpline:
              </p>
              <div className="space-y-2 text-xs font-mono font-bold text-blue-900 pt-1">
                {SCHOOL_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 hover:text-amber-600 transition-colors bg-white p-2 rounded border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

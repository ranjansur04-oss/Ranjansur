import React from 'react';
import { Shield, BookOpen, GraduationCap, HeartHandshake, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Page Header Banner */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Institutional Identity
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            About Unique Higher Secondary School
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Bijunagar, Kuakhia, Jajpur, Odisha – Dedicated to shaping young minds and building futures with academic rigor and moral discipline.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* About the Institution */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 space-y-6">
          <h2 className="text-2xl font-bold font-serif text-[#0b1f3a] border-b border-slate-100 pb-3">
            About the Institution
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Unique Higher Secondary School is a premier educational institution located in Bijunagar, Kuakhia, within Jajpur district of Odisha. Established to cater to higher secondary (+2) Science aspirants, our institution emphasizes student academic development, systematic concept building, and ethical discipline.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            We offer structured academic schedules, well-equipped science laboratory practical sessions, and dedicated mentorship across Physics, Chemistry, Mathematics, Botany, Zoology, Information Technology, English, and Odia.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] flex items-center justify-center">
              <Compass className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">Educational Philosophy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We believe that true education combines theoretical understanding with practical application. Learning is structured to instill curiosity, critical thinking, and confidence in every student.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">Learning Environment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A peaceful, disciplined, and student-centered campus environment at Kuakhia, Jajpur designed to minimize distractions and maximize daily focus.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">Student Development</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Beyond textbook preparation, students are mentored in time management, regular study habits, examination strategy, and leadership qualities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">Academic Guidance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Faculty members work closely with candidates through daily period schedules, doubt resolution classes, and continuous evaluation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">Institutional Values</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Integrity, hard work, discipline, punctuality, and respect form the foundational core of our institutional community.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">Future Horizons</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipping +2 science candidates with strong fundamental concepts required for university admissions and professional entrance examinations.
            </p>
          </div>
        </div>

        {/* Factual Disclaimer Notice */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-xs text-slate-700 space-y-1">
          <p className="font-bold text-[#0b1f3a]">Official Institutional Notice:</p>
          <p>
            Additional history, affiliation particulars, and official accreditation updates will be published here upon verification.
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between bg-[#0b1f3a] text-white p-8 rounded-xl shadow">
          <div>
            <h3 className="text-lg font-bold font-serif text-amber-300">Ready to Learn with Us?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Contact our admissions desk or visit our campus in Kuakhia today.
            </p>
          </div>
          <button
            onClick={() => onNavigate('admissions')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase px-5 py-3 rounded shadow shrink-0 flex items-center gap-2"
          >
            <span>Admission Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

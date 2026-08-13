import React from 'react';
import {
  Shield,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  Clock,
  Briefcase,
  FileSpreadsheet,
  ChevronRight,
  School,
  FileCheck,
  TrendingUp,
} from 'lucide-react';
import { SCHOOL_INFO, VERIFIED_SUBJECTS, JOB_VACANCIES, NOTICES } from '../data/schoolData';
import { PageId } from '../types';
import { CampusBuildingVisual } from '../components/CampusBuildingVisual';
import { SchoolLogo } from '../components/SchoolLogo';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12 font-sans bg-slate-50/50">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0b1f3a] text-white overflow-hidden py-16 md:py-24 border-b-4 border-amber-500">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-900/80 border border-blue-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Premier +2 Science Higher Secondary Institution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
                UNIQUE HIGHER SECONDARY SCHOOL
              </h1>

              <p className="text-xl md:text-2xl font-serif italic text-amber-400">
                "{SCHOOL_INFO.slogan}"
              </p>

              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.address}</span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                A place where learning meets excellence. Providing student-centered science education, rigorous academic schedule, disciplined guidance, and holistic development to nurture tomorrow’s leaders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 uppercase tracking-wider"
                >
                  <span>Admission Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('academics')}
                  className="bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3.5 rounded-lg border border-blue-600 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Explore Academics</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-5 py-3.5 rounded-lg border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Contact School</span>
                </button>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-4 border-t border-blue-900/80 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="font-medium">Direct Admission Lines:</span>
                {SCHOOL_INFO.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="hover:text-amber-400 font-mono font-semibold">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Hero Right Official Campus Building Visual */}
            <div className="lg:col-span-5">
              <CampusBuildingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              icon: BookOpen,
              title: 'Quality Education',
              desc: 'Structured science curriculum designed for conceptual clarity.',
            },
            {
              icon: Users,
              title: 'Academic Guidance',
              desc: 'Experienced faculty mentoring and systematic doubt clearing.',
            },
            {
              icon: Shield,
              title: 'Dedicated Learning',
              desc: 'Focused study environment with daily practical laboratory sessions.',
            },
            {
              icon: Award,
              title: 'Discipline & Values',
              desc: 'Instilling ethical responsibility, punctuality, and moral leadership.',
            },
            {
              icon: GraduationCap,
              title: 'Future Readiness',
              desc: 'Preparing candidates for higher science degrees and entrance exams.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b1f3a] group-hover:bg-[#0b1f3a] group-hover:text-amber-400 flex items-center justify-center transition-colors mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0b1f3a] font-serif group-hover:text-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 font-mono">
                About The Institution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1f3a] leading-tight">
                Learning with Purpose. Growing with Confidence.
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Unique Higher Secondary School, situated at Bijunagar, Kuakhia in Jajpur district, Odisha, is committed to creating an inspiring educational environment for higher secondary science students. We believe in nurturing raw intellectual talent with discipline, rigor, and supportive faculty mentorship.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our institution provides disciplined classroom learning, specialized laboratory practicals, and structured weekly period schedules to ensure complete syllabus coverage and confidence in competitive environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Student-centered learning approach',
                  'Individual laboratory experiment practice',
                  'Strict classroom discipline & attendance',
                  'Regular academic progress monitoring',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow transition-all flex items-center gap-2"
                >
                  <span>Read About Our Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-[#0b1f3a] text-white p-8 rounded-xl shadow-lg space-y-6">
              <h3 className="text-lg font-bold font-serif text-amber-300 border-b border-blue-800/80 pb-3">
                Institution Quick Profile
              </h3>
              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex justify-between py-1.5 border-b border-blue-800/40">
                  <span className="text-slate-400">Institution Name:</span>
                  <span className="font-semibold text-right">Unique Higher Secondary School</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-800/40">
                  <span className="text-slate-400">Stream Offered:</span>
                  <span className="font-semibold text-right">+2 Science (+2 1st & 2nd Year)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-800/40">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-right">Bijunagar, Kuakhia, Jajpur</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-800/40">
                  <span className="text-slate-400">PIN Code:</span>
                  <span className="font-semibold text-right">755009</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-800/40">
                  <span className="text-slate-400">Official Contact:</span>
                  <span className="font-semibold text-right font-mono">8594860632 / 8093639754</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Official Email:</span>
                  <span className="font-semibold text-right font-mono text-amber-300">
                    mahalikrajat207@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED ACADEMICS / SUBJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 font-mono">
            Academic Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1f3a]">
            Verified +2 Science Subjects
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Our academic stream encompasses rigorous foundational subjects with hands-on laboratory practical sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_SUBJECTS.map((sub) => (
            <div
              key={sub.id}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-blue-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold font-mono px-2 py-1 bg-blue-50 text-blue-900 rounded uppercase">
                    {sub.type}
                  </span>
                  <span className="text-xs font-extrabold font-mono text-amber-600">{sub.code}</span>
                </div>
                <h3 className="font-bold text-base text-[#0b1f3a] font-serif">{sub.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{sub.desc}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Theory & Practical
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STUDENT ACADEMIC PERFORMANCE & EVENT DASHBOARD PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-r from-[#0b1f3a] via-blue-900 to-[#0b1f3a] text-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 font-mono flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" /> Academic Performance & Events Dashboard
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
                Monitoring Progress & Building Student Excellence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Unique Higher Secondary School maintains a structured dashboard for tracking daily period execution, practical lab sessions, monthly assessments, and upcoming institutional events.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-blue-950/80 p-4 rounded-xl border border-blue-800/80 text-center">
                  <span className="block font-extrabold text-2xl text-amber-400 font-serif">7 Daily</span>
                  <span className="text-[11px] text-slate-300 font-medium">Academic Periods</span>
                </div>
                <div className="bg-blue-950/80 p-4 rounded-xl border border-blue-800/80 text-center">
                  <span className="block font-extrabold text-2xl text-amber-400 font-serif">100%</span>
                  <span className="text-[11px] text-slate-300 font-medium">Lab Practical Coverage</span>
                </div>
                <div className="bg-blue-950/80 p-4 rounded-xl border border-blue-800/80 text-center col-span-2 sm:col-span-1">
                  <span className="block font-extrabold text-2xl text-amber-400 font-serif">6 Days</span>
                  <span className="text-[11px] text-slate-300 font-medium">Weekly Structured Routine</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-sm text-[#0b1f3a] font-serif flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" /> Latest Institutional Notices
                </h3>
                <button
                  onClick={() => onNavigate('notices')}
                  className="text-xs font-bold text-blue-800 hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {NOTICES.slice(0, 3).map((notice) => (
                  <div key={notice.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">
                        {notice.category}
                      </span>
                      <span className="text-slate-500 font-mono">{notice.date}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{notice.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TIMETABLE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 font-mono">
                Academic Routine Preview
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0b1f3a]">
                +2 Academic Timetable Overview
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Official weekly schedule for +2 First Year and Second Year (Sections A & B).
              </p>
            </div>
            <button
              onClick={() => onNavigate('timetable')}
              className="bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow flex items-center gap-2 shrink-0"
            >
              <FileSpreadsheet className="w-4 h-4 text-amber-400" />
              <span>View Full Timetable</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#0b1f3a] text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4">Time Slot</th>
                  <th className="py-3 px-4">+2 1st Yr (Sec A)</th>
                  <th className="py-3 px-4">+2 1st Yr (Sec B)</th>
                  <th className="py-3 px-4">+2 2nd Yr (Sec A)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-blue-900">Period 1</td>
                  <td className="py-3 px-4 font-mono text-slate-600">07:00 AM - 07:45 AM</td>
                  <td className="py-3 px-4">Physics (Theory)</td>
                  <td className="py-3 px-4">Chemistry (Theory)</td>
                  <td className="py-3 px-4">Mathematics</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-blue-900">Period 2</td>
                  <td className="py-3 px-4 font-mono text-slate-600">07:45 AM - 08:30 AM</td>
                  <td className="py-3 px-4">Chemistry (Theory)</td>
                  <td className="py-3 px-4">Physics (Theory)</td>
                  <td className="py-3 px-4">Physics (Theory)</td>
                </tr>
                <tr className="bg-amber-50/60 font-semibold text-amber-900">
                  <td className="py-2.5 px-4">Break</td>
                  <td className="py-2.5 px-4 font-mono">10:00 AM - 10:30 AM</td>
                  <td colSpan={3} className="py-2.5 px-4 text-center tracking-wider font-mono">
                    --- REFRESHMENT BREAK ---
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-blue-900">Period 6</td>
                  <td className="py-3 px-4 font-mono text-slate-600">10:30 AM - 11:15 AM</td>
                  <td className="py-3 px-4 font-bold text-blue-800">Physics Lab</td>
                  <td className="py-3 px-4 font-bold text-blue-800">Chemistry Lab</td>
                  <td className="py-3 px-4 font-bold text-blue-800">Physics Practical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CAREERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block bg-slate-950 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                We Are Hiring!
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-950">
                Teaching Position Vacancies (Physics, Chemistry & Zoology)
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 font-medium">
                Salary: <span className="font-bold uppercase">Negotiable</span> | Send biodata to{' '}
                <a href={`mailto:${SCHOOL_INFO.email}`} className="font-bold underline">
                  {SCHOOL_INFO.email}
                </a>
              </p>
            </div>
            <button
              onClick={() => onNavigate('careers')}
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow transition-all shrink-0 flex items-center gap-2"
            >
              <span>View Hiring Vacancies</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. ADMISSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#0b1f3a] text-white rounded-2xl p-10 text-center space-y-6 shadow-xl border-2 border-blue-800/80">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-300">
            Shape Your Academic Future with Unique Higher Secondary School
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Admissions open for +2 First Year Science stream. Visit our campus at Bijunagar, Kuakhia, Jajpur or contact our helpline numbers for immediate counselling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('admissions')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-lg shadow-lg uppercase tracking-wider flex items-center gap-2"
            >
              <span>Apply / Submit Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phones[0]}`}
              className="bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-lg border border-blue-600 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline: {SCHOOL_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

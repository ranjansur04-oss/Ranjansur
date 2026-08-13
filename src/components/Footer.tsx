import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ChevronRight, GraduationCap, ShieldCheck, FileText, HeartHandshake } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO, VERIFIED_SUBJECTS } from '../data/schoolData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1f3a] text-white pt-16 pb-8 border-t-4 border-amber-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/60">
          {/* Column 1: Institutional Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SchoolLogo size={48} />
              <div>
                <h3 className="font-extrabold text-lg text-white font-serif leading-tight">
                  UNIQUE HIGHER SECONDARY SCHOOL
                </h3>
                <p className="text-xs text-amber-400 font-medium tracking-wide">
                  Bijunagar, Kuakhia, Jajpur
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Fostering academic excellence, discipline, and moral values for +2 Science students in Jajpur, Odisha. Shaping young minds for a brighter, confident future.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phones.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-amber-300 underline underline-offset-2">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-amber-400 uppercase tracking-wider font-serif border-b border-blue-800/80 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Institution' },
                { id: 'academics', label: 'Academics & Schedule' },
                { id: 'courses', label: 'Courses & Streams' },
                { id: 'timetable', label: '+2 Academic Timetable' },
                { id: 'admissions', label: 'Admission Enquiry' },
                { id: 'faculty', label: 'Faculty Directory' },
                { id: 'notices', label: 'Notice Board' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id as PageId)}
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors group text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Subjects & Streams */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-amber-400 uppercase tracking-wider font-serif border-b border-blue-800/80 pb-2 inline-block">
              Academic Subjects
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
              {VERIFIED_SUBJECTS.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleLinkClick('academics')}
                  className="flex items-center gap-1 hover:text-amber-300 transition-colors py-1 px-1.5 rounded bg-blue-950/50 hover:bg-blue-900/60 border border-blue-800/40 text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="truncate">{sub.name}</span>
                </button>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => handleLinkClick('careers')}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2 px-3 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Careers / Faculty Hiring</span>
              </button>
            </div>
          </div>

          {/* Column 4: Admissions & Timetable Quick Actions */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-amber-400 uppercase tracking-wider font-serif border-b border-blue-800/80 pb-2 inline-block">
              Admissions & Helpdesk
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Join +2 Science at Unique Higher Secondary School. Our admission desk is ready to assist parents and students with enquiries and document submissions.
            </p>

            <div className="bg-blue-950/80 p-3 rounded-lg border border-blue-800/60 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Discipline & Quality First</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Student-centered learning environment with experienced faculty and well-structured schedules.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="flex-1 bg-blue-800 hover:bg-blue-700 text-white font-semibold text-xs py-2 px-3 rounded text-center transition-colors border border-blue-700"
              >
                Contact Desk
              </button>
              <button
                onClick={() => handleLinkClick('timetable')}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs py-2 px-3 rounded text-center transition-colors border border-slate-700"
              >
                View Timetable
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">Unique Higher Secondary School</span>, Bijunagar, Kuakhia, Jajpur, Odisha. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Shaping Minds. Building Futures.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

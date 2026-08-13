import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Bell, Calendar, Sparkles } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'courses', label: 'Courses' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'timetable', label: 'Timetable', highlight: true },
    { id: 'admissions', label: 'Admissions' },
    { id: 'results', label: 'Results' },
    { id: 'campus', label: 'Campus' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'notices', label: 'Notices' },
    { id: 'events', label: 'Events' },
    { id: 'careers', label: 'Careers', highlight: true },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans">
      {/* Top Announcement & Quick Info Bar */}
      <div className="bg-[#0b1f3a] text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Announcement Ticker */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
            <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0 animate-pulse">
              <Sparkles className="w-3 h-3" /> Notice
            </span>
            <p className="truncate text-slate-200 text-xs font-medium">
              <span className="font-semibold text-amber-300">Admissions Open 2026-27</span> for +2 Science | <span className="text-amber-300">Hiring Faculty:</span> Physics, Chemistry & Zoology
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-xs shrink-0">
            <a
              href={`tel:${SCHOOL_INFO.phones[0]}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.phones[0]}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors truncate max-w-[200px]"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="truncate">{SCHOOL_INFO.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Kuakhia, Jajpur</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* School Brand & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1 transition-all group"
          >
            <img
              src="/unique_higher_secondary_school_logo.svg"
              alt="Unique Higher Secondary School Logo"
              className="h-auto max-h-[70px] sm:max-h-[80px] md:max-h-[85px] w-auto object-contain align-middle shrink-0 transition-transform duration-300 hover:scale-105 select-none"
              style={{ maxHeight: '80px', width: 'auto' }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg md:text-xl text-[#0b1f3a] tracking-tight leading-none group-hover:text-blue-700 transition-colors font-serif">
                UNIQUE HIGHER SECONDARY SCHOOL
              </span>
              <span className="text-xs font-medium text-amber-600 tracking-wider mt-1 uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600 inline" /> Bijunagar, Kuakhia, Jajpur, Odisha
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 font-medium text-xs font-sans">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-2 rounded-md transition-all font-semibold whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border-b-2 border-blue-800'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  } ${item.highlight ? 'relative' : ''}`}
                >
                  {item.label}
                  {item.highlight && !isActive && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('admissions')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all border border-blue-900 cursor-pointer"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-[#0b1f3a] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-slate-50 px-4 pt-3 pb-6 space-y-1 shadow-inner animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-[#0b1f3a] text-white shadow'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.highlight && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                      New
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('admissions')}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-3 rounded-lg shadow uppercase tracking-wider"
            >
              <span>Apply / Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phones[0]}`}
              className="w-full flex items-center justify-center gap-2 bg-[#0b1f3a] text-white font-semibold text-sm py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call School: {SCHOOL_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

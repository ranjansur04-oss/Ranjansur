import React from 'react';
import { SchoolLogo } from './SchoolLogo';
import { MapPin, Phone, Mail, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const CampusBuildingVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#0b1f3a] bg-[#0b1f3a] ${className}`}>
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-1.5 px-4 text-slate-950 font-black text-[11px] uppercase tracking-widest text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-slate-950" />
        <span>Official Institutional Campus • Bijunagar, Kuakhia, Jajpur</span>
        <Sparkles className="w-3.5 h-3.5 text-slate-950" />
      </div>

      {/* Main Building Facade Visual Render */}
      <div className="relative bg-gradient-to-b from-[#102a4d] via-[#0e2442] to-[#071629] text-white p-6 sm:p-10 space-y-8">
        
        {/* Sky Background & Building Upper Structure */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 bg-[#1e3a63] shadow-inner p-4 sm:p-8">
          
          {/* Decorative Building Pillars & Facade Layout */}
          <div className="space-y-6">
            
            {/* Upper Balcony Floor */}
            <div className="grid grid-cols-12 gap-2 bg-[#122b4d] border-b-4 border-amber-400 p-3 rounded-lg shadow">
              <div className="col-span-3 border-r border-blue-400/20 pr-2">
                <div className="h-10 bg-slate-800/80 rounded border border-slate-600 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-slate-300">Classrooms</span>
                </div>
              </div>
              <div className="col-span-6 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                  Shaping Minds, Building Futures
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-serif text-white tracking-wide">
                  UNIQUE HIGHER SECONDARY SCHOOL
                </h2>
              </div>
              <div className="col-span-3 border-l border-blue-400/20 pl-2">
                <div className="h-10 bg-slate-800/80 rounded border border-slate-600 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-slate-300">Science Labs</span>
                </div>
              </div>
            </div>

            {/* Central Entrance Sign Board Tower (Matching Photo 1 & 3) */}
            <div className="bg-[#081a33] border-4 border-blue-600 rounded-2xl p-6 shadow-2xl text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-full bg-white p-1 shadow-lg ring-4 ring-amber-400 flex items-center justify-center">
                <SchoolLogo size={72} />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
                  UNIQUE HIGHER SECONDARY SCHOOL
                </h3>
                <div className="inline-block bg-amber-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow">
                  Bijunagar, Kuakhia, Jajpur, Odisha – 755009
                </div>
              </div>

              <p className="text-xs sm:text-sm text-blue-200 font-serif italic max-w-xl mx-auto">
                "A Place Where Learning Meets Excellence"
              </p>
            </div>

            {/* Paved Interlocking Brick Courtyard Representation */}
            <div className="relative rounded-xl overflow-hidden border border-blue-400/30 p-4 bg-gradient-to-r from-[#8b3a3a] via-[#a34343] to-[#8b3a3a] text-white text-center space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-amber-200 border-b border-white/20 pb-2">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-300" /> Paved Assembly Courtyard</span>
                <span className="bg-emerald-900/80 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-400/30">Verified Facade</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] text-amber-400 font-mono block">CAMPUS FACILITY</span>
                  <p className="text-xs font-bold text-white">Girls & Boys Classrooms</p>
                  <p className="text-[10px] text-slate-300">Modern blue & white seating desks</p>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] text-amber-400 font-mono block">HERITAGE PREMISES</span>
                  <p className="text-xs font-bold text-white">Cultural Shrine Mandap</p>
                  <p className="text-[10px] text-slate-300">Ornate carved stone heritage pillar</p>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] text-amber-400 font-mono block">LOCATION DISCIPLINE</span>
                  <p className="text-xs font-bold text-white">Bijunagar, Kuakhia</p>
                  <p className="text-[10px] text-slate-300">Gated & landscaped security</p>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] text-amber-400 font-mono block">ADMISSION HELPLINE</span>
                  <p className="text-xs font-bold text-white">8594860632 / 8093639754</p>
                  <p className="text-[10px] text-slate-300">mahalikrajat207@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Pill Tags */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-bold">
          <div className="bg-white/10 backdrop-blur p-2.5 rounded-xl border border-white/20 text-slate-100 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Quality Education</span>
          </div>
          <div className="bg-white/10 backdrop-blur p-2.5 rounded-xl border border-white/20 text-slate-100 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Dedicated Teachers</span>
          </div>
          <div className="bg-white/10 backdrop-blur p-2.5 rounded-xl border border-white/20 text-slate-100 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Strong Foundation</span>
          </div>
          <div className="bg-white/10 backdrop-blur p-2.5 rounded-xl border border-white/20 text-slate-100 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Discipline & Values</span>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-amber-500 text-slate-950 p-2.5 rounded-xl font-extrabold flex items-center justify-center gap-1.5 shadow">
            <Award className="w-4 h-4" />
            <span>Better Future Assured</span>
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { Trophy, Award, TrendingUp, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Academic Performance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Results & Student Achievements
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Celebrating academic performance, board examination results, and science talent achievements at Unique Higher Secondary School.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Mandated Official Disclaimer Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
            <Trophy className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-[#0b1f3a]">Board Results & Honor Roll</h2>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200 max-w-xl mx-auto">
            <p className="text-sm font-bold text-amber-950">
              "Official results and achievements will be published here."
            </p>
            <p className="text-xs text-amber-800 mt-1">
              Annual Council Higher Secondary Education (CHSE) examination results and rank lists will be updated following official publication.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold font-serif">
              <Award className="w-5 h-5 text-amber-500" />
              <h3>Council Board Results</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              CHSE +2 Science Annual Examination roll-wise results, pass percentage summaries, and subject distinctions.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Status: Awaiting official publication
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold font-serif">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3>Science Exhibitions</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              District and state-level science project models, biology practical showcases, and innovative student inventions.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Status: Updates scheduled for upcoming session
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold font-serif">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              <h3>Academic Merit Medals</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Recognizing term test toppers in Physics, Chemistry, Mathematics, Botany, Zoology, IT, English, and Odia.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Status: Updates scheduled post internal assessments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

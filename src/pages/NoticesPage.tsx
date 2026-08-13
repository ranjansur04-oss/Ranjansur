import React, { useState } from 'react';
import { NOTICES } from '../data/schoolData';
import { Bell, Search, Calendar, Tag, AlertCircle, FileText } from 'lucide-react';

export const NoticesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admission', 'Academic', 'Examination', 'Holiday', 'Events', 'General'];

  const filteredNotices = NOTICES.filter((n) => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Official Circulars
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Notice Board & Updates
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Official announcements regarding admissions, recruitment, academic schedules, and examinations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notices..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0b1f3a] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-900 text-[10px] font-bold font-mono px-2.5 py-1 rounded uppercase">
                    {notice.category}
                  </span>
                  {notice.isImportant && (
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-bold font-mono px-2 py-0.5 rounded uppercase">
                      Urgent Notice
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Published: {notice.date}</span>
                </div>
              </div>

              <h3 className="font-bold text-lg text-[#0b1f3a] font-serif">{notice.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed">{notice.description}</p>
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-500">
              <FileText className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold">No notices found matching your filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

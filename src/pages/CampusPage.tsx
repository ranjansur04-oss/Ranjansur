import React from 'react';
import { School, Building, Monitor, BookOpen, Trophy, ShieldCheck, AlertCircle } from 'lucide-react';

export const CampusPage: React.FC = () => {
  const verifiedFacilities = [
    {
      title: 'Classrooms',
      desc: 'Well-ventilated classrooms with dedicated seating benches for disciplined academic lectures.',
      status: 'Verified',
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Campus Building & Courtyard',
      desc: 'Spacious multi-story campus facade located at Bijunagar, Kuakhia with paved assembly courtyard.',
      status: 'Verified',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const pendingFacilities = [
    'Science Laboratories (Physics, Chemistry & Biology)',
    'Library & Reading Room',
    'Computer & Information Technology Facilities',
    'Sports & Athletic Grounds',
    'Study & Doubt Clearance Halls',
  ];

  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Learning Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Campus Infrastructure & Facilities
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            A safe, disciplined, and supportive educational campus in Bijunagar, Kuakhia, Jajpur, Odisha.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Verified Facilities */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-[#0b1f3a] border-b border-slate-200 pb-3">
            Verified Campus Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verifiedFacilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-[#0b1f3a] font-serif">{fac.title}</h3>
                    <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      {fac.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Facilities with mandatory disclaimer */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold font-serif text-[#0b1f3a]">Additional Facilities Information</h2>
          </div>

          <p className="text-xs text-slate-600">
            Detail specifications for the following campus facilities are undergoing official documentation review:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingFacilities.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-bold text-xs text-[#0b1f3a] font-serif">{item}</h4>
                <p className="text-[11px] text-amber-700 italic">"Facility information will be updated soon."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

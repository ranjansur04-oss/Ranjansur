import React from 'react';
import { EVENTS } from '../data/schoolData';
import { Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const upcomingEvents = EVENTS.filter((e) => e.status === 'upcoming');
  const recentEvents = EVENTS.filter((e) => e.status === 'recent');

  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Institutional Calendar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Events & Academic Functions
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Stay informed about orientation sessions, parent-teacher meetings, science workshops, and institutional programs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Upcoming Events */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold font-serif text-[#0b1f3a]">Upcoming Institutional Events</h2>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="bg-blue-50 text-blue-900 font-bold font-mono text-[10px] px-2.5 py-1 rounded uppercase">
                      {evt.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded">
                      Upcoming
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#0b1f3a] font-serif">{evt.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{evt.description}</p>

                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{evt.date}</span>
                    </div>
                    {evt.time && (
                      <div className="flex items-center gap-1.5 font-mono">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{evt.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-600 text-sm">
              "Upcoming events will be announced here."
            </div>
          )}
        </div>

        {/* Recent Events Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-[#0b1f3a] border-b border-slate-200 pb-3">
            Recent Campus Events
          </h2>
          {recentEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentEvents.map((evt) => (
                <div key={evt.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <h3 className="font-bold text-base text-[#0b1f3a] font-serif">{evt.title}</h3>
                  <p className="text-xs text-slate-600">{evt.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-600 text-xs italic">
              Recent event archives will be updated following upcoming celebrations.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

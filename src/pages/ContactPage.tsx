import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Clock,
  Building,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.mobile.trim()) errs.mobile = 'Mobile number is required.';
    if (!formData.message.trim()) errs.message = 'Message content is required.';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-12 font-sans bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#0b1f3a] text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Institutional Helpdesk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Contact & Location Details
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            We are here to assist parents, candidates, and visitors. Connect with Unique Higher Secondary School.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Contact Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href={`tel:${SCHOOL_INFO.phones[0]}`}
            className="bg-[#0b1f3a] hover:bg-blue-900 text-white p-5 rounded-2xl shadow transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <Phone className="w-6 h-6 text-amber-400 group-hover:text-slate-950" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-amber-400">Call Helpline</span>
              <h3 className="font-bold text-sm">{SCHOOL_INFO.phones[0]}</h3>
            </div>
          </a>

          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="bg-white hover:bg-slate-50 text-slate-900 p-5 rounded-2xl shadow border border-slate-200 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-[#0b1f3a] group-hover:text-amber-400 transition-colors">
              <Mail className="w-6 h-6 text-blue-900 group-hover:text-amber-400" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase font-mono font-bold text-blue-800">Email School</span>
              <h3 className="font-bold text-xs truncate">{SCHOOL_INFO.email}</h3>
            </div>
          </a>

          <a
            href={`https://wa.me/91${SCHOOL_INFO.phones[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-800 hover:bg-emerald-700 text-white p-5 rounded-2xl shadow transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-emerald-300">WhatsApp Query</span>
              <h3 className="font-bold text-sm">Send Message</h3>
            </div>
          </a>

          <a
            href="#map-section"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 p-5 rounded-2xl shadow transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-slate-900">Campus Visit</span>
              <h3 className="font-bold text-sm">GET DIRECTIONS</h3>
            </div>
          </a>
        </div>

        {/* Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold font-serif text-[#0b1f3a] border-b border-slate-100 pb-3">
              Official School Address
            </h2>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">UNIQUE HIGHER SECONDARY SCHOOL</h3>
                  <p className="mt-1 leading-relaxed">{SCHOOL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Phone Helplines:</h3>
                  <div className="space-y-1 font-mono font-semibold text-blue-900 mt-1">
                    {SCHOOL_INFO.phones.map((p) => (
                      <p key={p}>• {p}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Official Email:</h3>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="font-mono text-blue-900 font-bold underline mt-1 block">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Office Working Hours:</h3>
                  <p className="mt-1">{SCHOOL_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold font-serif text-[#0b1f3a] border-b border-slate-100 pb-3">
              Send a Message to Management
            </h2>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3 text-emerald-900">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg font-serif">Message Delivered!</h3>
                <p className="text-xs text-slate-700">
                  Thank you for reaching out. Your enquiry has been received and will be reviewed by the school office at Kuakhia.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 text-xs font-bold text-blue-800 underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.name && <p className="text-red-600 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit phone number"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.mobile && <p className="text-red-600 text-[11px] mt-1">{errors.mobile}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Optional email"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Topic of enquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your query or message here"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {errors.message && <p className="text-red-600 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-lg shadow uppercase tracking-wider flex items-center gap-2 text-xs"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Section Placeholder with mandatory notice */}
        <div id="map-section" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold font-serif text-[#0b1f3a] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-600" /> Google Maps Location
            </h2>
            <span className="text-xs font-mono font-bold text-slate-500">
              Bijunagar, Kuakhia, Jajpur
            </span>
          </div>

          <div className="bg-slate-100 rounded-xl p-12 text-center border-2 border-dashed border-slate-300 space-y-3">
            <Navigation className="w-12 h-12 text-blue-900 mx-auto animate-bounce" />
            <h3 className="font-bold text-base text-[#0b1f3a] font-serif">
              Bijunagar, Kuakhia, Jajpur, Odisha – 755009
            </h3>
            <p className="text-xs text-amber-800 font-bold bg-amber-50 p-3 rounded-lg border border-amber-200 max-w-md mx-auto">
              "Official Google Maps location will be added after verification."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

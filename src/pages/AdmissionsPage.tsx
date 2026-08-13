import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Send,
  Sparkles,
  User,
  BookOpen,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AdmissionEnquiry } from '../types';

export const AdmissionsPage: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionEnquiry>({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    currentClass: '+2 1st Year',
    courseStream: 'Science (PCMB / PCMIT)',
    academicYear: '2026-2027',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionEnquiry, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof AdmissionEnquiry, string>> = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required.';
    if (!formData.parentName.trim()) errs.parentName = 'Parent/Guardian name is required.';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      errs.mobile = 'Enter a valid 10-digit mobile number.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
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
            Academic Enrollment
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Admissions & Enquiry
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Admissions open for +2 Science First Year for the 2026-27 academic session at Unique Higher Secondary School, Kuakhia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Admission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold font-serif text-[#0b1f3a]">Admission Overview</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Unique Higher Secondary School welcomes candidates seeking admission into the +2 Science stream. Admissions are processed strictly through merit and transparent guidelines at our Bijunagar, Kuakhia campus.
              </p>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold font-serif text-[#0b1f3a]">Documents Required at Admission</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                {[
                  '10th Board Marksheet & Pass Certificate',
                  'School Leaving Certificate (SLC) / Transfer Certificate',
                  'Conduct Certificate from last attended school',
                  'Recent Passport Size Color Photographs',
                  'Caste / Reservation Certificate (if applicable)',
                  'Aadhaar Card copy of candidate and parent',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Notices for Missing Info */}
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 space-y-3 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <AlertCircle className="w-5 h-5 text-amber-700" />
                <span>Important Information Updates</span>
              </div>
              <p>• <strong>Eligibility Criteria:</strong> Official information will be updated soon.</p>
              <p>• <strong>Important Fee Structure:</strong> Official information will be updated soon.</p>
              <p>• <strong>Important Dates & Cutoffs:</strong> Official information will be updated soon.</p>
            </div>
          </div>

          {/* Right Admission Form Column */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-900/20 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold font-mono text-amber-600 uppercase tracking-wider">
                  Online Registration
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#0b1f3a] mt-1">
                  Admission Enquiry Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submit your details for counselor call back and campus visit.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3 text-emerald-900">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg font-serif">Enquiry Submitted Successfully!</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Thank you for contacting Unique Higher Secondary School. Our admissions desk will call you at <strong className="font-mono">{formData.mobile}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        studentName: '',
                        parentName: '',
                        mobile: '',
                        email: '',
                        currentClass: '+2 1st Year',
                        courseStream: 'Science (PCMB / PCMIT)',
                        academicYear: '2026-2027',
                        message: '',
                      });
                    }}
                    className="mt-2 text-xs font-bold text-blue-800 underline"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Enter student's full name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.studentName && <p className="text-red-600 text-[11px] mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Parent / Guardian Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Enter parent's full name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.parentName && <p className="text-red-600 text-[11px] mt-1">{errors.parentName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                      {errors.mobile && <p className="text-red-600 text-[11px] mt-1">{errors.mobile}</p>}
                    </div>

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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Seeking Class</label>
                      <select
                        value={formData.currentClass}
                        onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="+2 1st Year">+2 1st Year Science</option>
                        <option value="+2 2nd Year">+2 2nd Year Science</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Academic Session</label>
                      <input
                        type="text"
                        value={formData.academicYear}
                        readOnly
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-600 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Queries / Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention any specific query regarding admission"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0b1f3a] hover:bg-blue-900 text-white font-bold py-3.5 px-4 rounded-lg shadow-md transition-all uppercase tracking-wider flex items-center justify-center gap-2 text-xs"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Submit Admission Enquiry</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center">
                    Note: Submissions are stored locally for verification and counselor review.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

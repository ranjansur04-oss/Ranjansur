export type PageId =
  | 'home'
  | 'about'
  | 'academics'
  | 'courses'
  | 'faculty'
  | 'timetable'
  | 'admissions'
  | 'results'
  | 'campus'
  | 'gallery'
  | 'notices'
  | 'events'
  | 'careers'
  | 'contact';

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Academic' | 'Examination' | 'Holiday' | 'Events' | 'General';
  description: string;
  isImportant?: boolean;
  linkText?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  status: 'upcoming' | 'recent';
  description: string;
  category: string;
}

export interface FacultyMember {
  id: string;
  name?: string;
  designation: string;
  subject: string;
  qualification?: string;
  experience?: string;
  biography?: string;
  isVacant?: boolean;
}

export interface TimetablePeriod {
  periodNumber: number;
  timeSlot: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

export interface TimetableSection {
  year: '+2 First Year' | '+2 Second Year';
  section: 'A' | 'B';
  periods: TimetablePeriod[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academic Activities' | 'Students' | 'Events' | 'Achievements' | 'Other';
  imageUrl: string;
  caption: string;
}

export interface JobVacancy {
  id: string;
  subject: string;
  position: string;
  type: string;
  salary: string;
  email: string;
  contactPhones: string[];
  description: string;
}

export interface AdmissionEnquiry {
  studentName: string;
  parentName: string;
  mobile: string;
  email: string;
  currentClass: string;
  courseStream: string;
  academicYear: string;
  message: string;
}

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageId } from './types';

// Page Imports
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { CoursesPage } from './pages/CoursesPage';
import { FacultyPage } from './pages/FacultyPage';
import { TimetablePage } from './pages/TimetablePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ResultsPage } from './pages/ResultsPage';
import { CampusPage } from './pages/CampusPage';
import { GalleryPage } from './pages/GalleryPage';
import { NoticesPage } from './pages/NoticesPage';
import { EventsPage } from './pages/EventsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'academics':
        return <AcademicsPage onNavigate={setCurrentPage} />;
      case 'courses':
        return <CoursesPage onNavigate={setCurrentPage} />;
      case 'faculty':
        return <FacultyPage onNavigate={setCurrentPage} />;
      case 'timetable':
        return <TimetablePage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'results':
        return <ResultsPage />;
      case 'campus':
        return <CampusPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'notices':
        return <NoticesPage />;
      case 'events':
        return <EventsPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-slate-950 focus:font-bold focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

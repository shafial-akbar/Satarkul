import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import { ContentProvider, useContent } from './context/ContentContext';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import WhatsAppFAB from './components/shared/WhatsAppFAB';
import BackToTop from './components/shared/BackToTop';

// Pages
import HomePage from './pages/home';
import AboutPage from './pages/about/AboutPage';
import VisionMissionPage from './pages/about/VisionMissionPage';
import LegalStatusPage from './pages/about/LegalStatusPage';
import WorkAreaPage from './pages/about/WorkAreaPage';
import MembershipPage from './pages/about/MembershipPage';
import GoverningBodyPage from './pages/about/GoverningBodyPage';
import EducationPage from './pages/programs/EducationPage';
import HealthPage from './pages/programs/HealthPage';
import SkillDevelopmentPage from './pages/programs/SkillDevelopmentPage';
import FinancialSupportPage from './pages/programs/FinancialSupportPage';
import AssistiveDevicesPage from './pages/programs/AssistiveDevicesPage';
import AwarenessPage from './pages/programs/AwarenessPage';
import SocialSupportPage from './pages/programs/SocialSupportPage';
import SpecialProgramsPage from './pages/programs/SpecialProgramsPage';
import ProgramsPage from './pages/programs/ProgramsPage';
import ActivitiesPage from './pages/activities/ActivitiesPage';
import AdvocacyPage from './pages/activities/AdvocacyPage';
import SpecialDaysPage from './pages/activities/SpecialDaysPage';
import CommitteeMeetingsPage from './pages/activities/CommitteeMeetingsPage';
import ReliefActivitiesPage from './pages/activities/ReliefActivitiesPage';
import CulturalActivitiesPage from './pages/activities/CulturalActivitiesPage';
import NewsPage from './pages/news/NewsPage';
import BlogPage from './pages/news/BlogPage';
import NewsDetailPage from './pages/news/NewsDetailPage';
import GalleryPage from './pages/gallery/GalleryPage';
import VideosPage from './pages/gallery/VideosPage';
import DownloadsPage from './pages/resources/DownloadsPage';
import CapacityBuildingPage from './pages/resources/CapacityBuildingPage';
import NeedsAssessmentPage from './pages/about/NeedsAssessmentPage';
import ContributionTrackingPage from './pages/support/ContributionTrackingPage';
import HelplinePage from './pages/support/HelplinePage';
import StudentProfilesPage from './pages/programs/StudentProfilesPage';
import DonationGuidePage from './pages/support/DonationGuidePage';
import DonatePage from './pages/support/DonatePage';
import DonorsPage from './pages/support/DonorsPage';
import PartnerPage from './pages/support/PartnerPage';
import VolunteerPage from './pages/support/VolunteerPage';
import SupportPage from './pages/support/SupportPage';
import ContactPage from './pages/contact/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}

function AppContent() {
  const { lang } = useLanguage();
  const { currentTheme } = useTheme();
  const { loading } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen flex flex-col selection:bg-primary selection:text-white`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/vision-mission" element={<VisionMissionPage />} />
            <Route path="/about/legal-status" element={<LegalStatusPage />} />
            <Route path="/about/work-area" element={<WorkAreaPage />} />
            <Route path="/about/membership" element={<MembershipPage />} />
            <Route path="/about/governing-body" element={<GoverningBodyPage />} />
            <Route path="/about/needs-assessment" element={<NeedsAssessmentPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/student-profiles" element={<StudentProfilesPage />} />
            <Route path="/programs/education" element={<EducationPage />} />
            <Route path="/programs/health" element={<HealthPage />} />
            <Route path="/programs/skill-development" element={<SkillDevelopmentPage />} />
            <Route path="/programs/financial-support" element={<FinancialSupportPage />} />
            <Route path="/programs/assistive-devices" element={<AssistiveDevicesPage />} />
            <Route path="/programs/awareness" element={<AwarenessPage />} />
            <Route path="/programs/social-support" element={<SocialSupportPage />} />
            <Route path="/programs/special-programs" element={<SpecialProgramsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/relief" element={<ReliefActivitiesPage />} />
            <Route path="/activities/cultural" element={<CulturalActivitiesPage />} />
            <Route path="/activities/special-days" element={<SpecialDaysPage />} />
            <Route path="/activities/advocacy" element={<AdvocacyPage />} />
            <Route path="/activities/committee-meetings" element={<CommitteeMeetingsPage />} />
            <Route path="/activities/special-programs" element={<SpecialProgramsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/resources/downloads" element={<DownloadsPage />} />
            <Route path="/resources/capacity-building" element={<CapacityBuildingPage />} />
            <Route path="/support/donate" element={<DonatePage />} />
            <Route path="/support/donation-guide" element={<DonationGuidePage />} />
            <Route path="/support/contribution-tracking" element={<ContributionTrackingPage />} />
            <Route path="/support/helpline" element={<HelplinePage />} />
            <Route path="/support/donors" element={<DonorsPage />} />
            <Route path="/support/partner" element={<PartnerPage />} />
            <Route path="/support/volunteer" element={<VolunteerPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ThemeSwitcher />
        <WhatsAppFAB />
        <BackToTop />
      </div>
    </Router>
  );
}

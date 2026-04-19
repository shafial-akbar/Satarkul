import axios from 'axios';
import { mockStats, mockPrograms, mockGoverningBody, mockDonors, mockActivities } from './mockData';
import { newsData } from '../data/newsData';
import { galleryData, videosData } from '../data/galleryData';
import { downloadsData } from '../data/downloadsData';
import { educationData } from '../data/educationData';
import { healthData } from '../data/healthData';
import { skillsData } from '../data/skillDevelopmentData';
import { financialData } from '../data/financialData';
import { assistiveData } from '../data/assistiveDevicesData';
import { awarenessPrograms } from '../data/awarenessData';
import { socialSupportServices } from '../data/socialSupportData';
import { specialPrograms } from '../data/specialProgramsData';
import { reliefActivitiesData } from '../data/reliefActivitiesData';
import { culturalActivitiesData } from '../data/culturalActivitiesData';
import { advocacyActivitiesData } from '../data/advocacyActivitiesData';
import { committeeMeetingsData } from '../data/committeeMeetingsData';
import { specialDaysActivitiesData } from '../data/specialDaysActivitiesData';
import { trainingData } from '../data/trainingData';
import { contributionData } from '../data/contributionData';
import { needsAssessmentData } from '../data/needsAssessmentData';
import { helplineData } from '../data/helplineData';
import { studentsData } from '../data/studentsData';
import { donationGuideData } from '../data/donationGuideData';
import siteContent from '../data/siteContent';

const USE_MOCK = true;

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

const mockCall = (data) => new Promise((resolve) => {
  setTimeout(() => resolve(data), 400);
});

// Organization & General
export const getActivitiesOverview = () => USE_MOCK ? mockCall(siteContent.activities) : apiClient.get('/activities/overview').then(res => res.data);
export const getOrgStats = () => USE_MOCK ? mockCall(mockStats) : apiClient.get('/stats').then(res => res.data);
export const getGoverningMembers = () => USE_MOCK ? mockCall(mockGoverningBody) : apiClient.get('/governing-body').then(res => res.data);
export const getDonors = () => USE_MOCK ? mockCall(mockDonors) : apiClient.get('/donors').then(res => res.data);
export const getActivities = () => USE_MOCK ? mockCall(mockActivities) : apiClient.get('/activities').then(res => res.data);

// News & Blog
export const getNews = () => USE_MOCK ? mockCall(newsData) : apiClient.get('/news').then(res => res.data);
export const getNewsById = (id) => USE_MOCK ? mockCall(newsData.find(item => item.id === id)) : apiClient.get(`/news/${id}`).then(res => res.data);

// Media & Resources
export const getGallery = () => USE_MOCK ? mockCall(galleryData) : apiClient.get('/gallery').then(res => res.data);
export const getVideos = () => USE_MOCK ? mockCall(videosData) : apiClient.get('/videos').then(res => res.data);
export const getDownloads = () => USE_MOCK ? mockCall(downloadsData) : apiClient.get('/downloads').then(res => res.data);

// Programs
export const getProgramsOverview = () => USE_MOCK ? mockCall(siteContent.programs) : apiClient.get('/programs/overview').then(res => res.data);
export const getPrograms = () => USE_MOCK ? mockCall(mockPrograms) : apiClient.get('/programs').then(res => res.data);

// Detailed Program Data
export const getEducationData = () => USE_MOCK ? mockCall(educationData) : apiClient.get('/programs/education').then(res => res.data);
export const getHealthData = () => USE_MOCK ? mockCall(healthData) : apiClient.get('/programs/health').then(res => res.data);
export const getSkillsData = () => USE_MOCK ? mockCall(skillsData) : apiClient.get('/programs/skills').then(res => res.data);
export const getFinancialData = () => USE_MOCK ? mockCall(financialData) : apiClient.get('/programs/financial').then(res => res.data);
export const getDevicesData = () => USE_MOCK ? mockCall(assistiveData) : apiClient.get('/programs/devices').then(res => res.data);
export const getAwarenessData = () => USE_MOCK ? mockCall(awarenessPrograms) : apiClient.get('/programs/awareness').then(res => res.data);
export const getSocialSupportData = () => USE_MOCK ? mockCall(socialSupportServices) : apiClient.get('/programs/social-support').then(res => res.data);
export const getSpecialProgramsData = () => USE_MOCK ? mockCall(specialPrograms) : apiClient.get('/programs/special').then(res => res.data);

// Detailed Activity Data
export const getReliefData = () => USE_MOCK ? mockCall(reliefActivitiesData) : apiClient.get('/activities/relief').then(res => res.data);
export const getCulturalData = () => USE_MOCK ? mockCall(culturalActivitiesData) : apiClient.get('/activities/cultural').then(res => res.data);
export const getAdvocacyData = () => USE_MOCK ? mockCall(advocacyActivitiesData) : apiClient.get('/activities/advocacy').then(res => res.data);
export const getMeetingsData = () => USE_MOCK ? mockCall(committeeMeetingsData) : apiClient.get('/activities/meetings').then(res => res.data);
export const getSpecialDaysData = () => USE_MOCK ? mockCall(specialDaysActivitiesData) : apiClient.get('/activities/special-days').then(res => res.data);

// New Pages Data
export const getTrainingData = () => USE_MOCK ? mockCall(trainingData) : apiClient.get('/training').then(res => res.data);
export const getContributions = () => USE_MOCK ? mockCall(contributionData) : apiClient.get('/contributions').then(res => res.data);
export const getNeedsAssessment = () => USE_MOCK ? mockCall(needsAssessmentData) : apiClient.get('/needs-assessment').then(res => res.data);
export const getHelplineData = () => USE_MOCK ? mockCall(helplineData) : apiClient.get('/helpline').then(res => res.data);
export const getStudents = () => USE_MOCK ? mockCall(studentsData) : apiClient.get('/students').then(res => res.data);
export const getDonationGuide = () => USE_MOCK ? mockCall(donationGuideData) : apiClient.get('/donation-guide').then(res => res.data);

// Submissions
export const submitContact = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/contact', data).then(res => res.data);
export const submitVolunteer = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/volunteer', data).then(res => res.data);
export const submitDonate = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/donate', data).then(res => res.data);
export const submitPartner = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/partner', data).then(res => res.data);

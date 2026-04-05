import axios from 'axios';
import { mockStats, mockPrograms, mockGoverningBody, mockDonors, mockActivities } from './mockData';
import { newsData } from '../data/newsData';
import { galleryData, videosData } from '../data/galleryData';
import { downloadsData } from '../data/downloadsData';
import { schoolStats, schoolClasses, subPrograms } from '../data/educationData';
import { healthServices, healthEvents } from '../data/healthData';
import { mainSkills, trainingProjects } from '../data/skillDevelopmentData';
import { financialGrants, smeLoans } from '../data/financialData';
import { devices, impactPoints } from '../data/assistiveDevicesData';
import { awarenessPrograms } from '../data/awarenessData';
import { socialSupportServices } from '../data/socialSupportData';
import { specialPrograms } from '../data/specialProgramsData';

const USE_MOCK = true;

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

const mockCall = (data) => new Promise((resolve) => {
  setTimeout(() => resolve(data), 400);
});

// Organization & General
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
export const getPrograms = () => USE_MOCK ? mockCall(mockPrograms) : apiClient.get('/programs').then(res => res.data);

// Detailed Program Data
export const getEducationData = () => USE_MOCK ? mockCall({ schoolStats, schoolClasses, subPrograms }) : apiClient.get('/programs/education').then(res => res.data);
export const getHealthData = () => USE_MOCK ? mockCall({ healthServices, healthEvents }) : apiClient.get('/programs/health').then(res => res.data);
export const getSkillsData = () => USE_MOCK ? mockCall({ mainSkills, trainingProjects }) : apiClient.get('/programs/skills').then(res => res.data);
export const getFinancialData = () => USE_MOCK ? mockCall({ financialGrants, smeLoans }) : apiClient.get('/programs/financial').then(res => res.data);
export const getDevicesData = () => USE_MOCK ? mockCall({ devices, impactPoints }) : apiClient.get('/programs/devices').then(res => res.data);
export const getAwarenessData = () => USE_MOCK ? mockCall(awarenessPrograms) : apiClient.get('/programs/awareness').then(res => res.data);
export const getSocialSupportData = () => USE_MOCK ? mockCall(socialSupportServices) : apiClient.get('/programs/social-support').then(res => res.data);
export const getSpecialProgramsData = () => USE_MOCK ? mockCall(specialPrograms) : apiClient.get('/programs/special').then(res => res.data);

// Submissions
export const submitContact = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/contact', data).then(res => res.data);
export const submitVolunteer = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/volunteer', data).then(res => res.data);
export const submitDonate = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/donate', data).then(res => res.data);
export const submitPartner = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/partner', data).then(res => res.data);

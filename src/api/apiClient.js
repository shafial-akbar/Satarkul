import axios from 'axios';
import { mockStats, mockPrograms, mockGoverningBody, mockDonors, mockActivities } from './mockData';

const USE_MOCK = true;

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

const mockCall = (data) => new Promise((resolve) => {
  setTimeout(() => resolve(data), 400);
});

export const getOrgStats = () => USE_MOCK ? mockCall(mockStats) : apiClient.get('/stats').then(res => res.data);
export const getPrograms = () => USE_MOCK ? mockCall(mockPrograms) : apiClient.get('/programs').then(res => res.data);
export const getGoverningMembers = () => USE_MOCK ? mockCall(mockGoverningBody) : apiClient.get('/governing-body').then(res => res.data);
export const getDonors = () => USE_MOCK ? mockCall(mockDonors) : apiClient.get('/donors').then(res => res.data);
export const getActivities = () => USE_MOCK ? mockCall(mockActivities) : apiClient.get('/activities').then(res => res.data);

export const submitContact = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/contact', data).then(res => res.data);
export const submitVolunteer = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/volunteer', data).then(res => res.data);
export const submitDonate = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/donate', data).then(res => res.data);
export const submitPartner = (data) => USE_MOCK ? mockCall({ success: true }) : apiClient.post('/partner', data).then(res => res.data);

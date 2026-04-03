import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import siteContent from '../data/siteContent';

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(siteContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('/api/content');
        if (response.data) {
          setContent(response.data);
        }
        setLoading(false);
      } catch (err) {
        console.warn('Error fetching content from API, using local fallback:', err);
        // We already have siteContent as initial state, so just stop loading
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

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
        // Validate that response.data is an object and contains expected keys
        if (response.data && typeof response.data === 'object' && response.data.common) {
          setContent(response.data);
        } else {
          console.warn('Invalid content data received from API, using local fallback');
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

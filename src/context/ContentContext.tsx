import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('/api/content');
        setContent(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError(err);
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

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://forum-istad-api.cheat.casa/api/v1',
  prepareHeaders: (headers, { getState }) => {
    // ព្យាយាមយក token ពី Redux state ជាមុនសិន
    let token = getState().auth?.token;
    
    // បើគ្មានក្នុង Redux សូមអានពី localStorage ផ្ទាល់
    if (!token) {
      token = localStorage.getItem('token');
    }
    
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/apiClient';

const API_BASE_URL = 'https://forum-istad-api.cheat.casa'; // Same as used in profileApi

export const uploadApi = createApi({
    reducerPath: 'uploadApi',
    baseQuery,
    endpoints: (builder) => ({
        uploadMultipleImages: builder.mutation({
            query: (files) => {
                const formData = new FormData();
                // Typically multiple files are appended with the same key "files" or "files[]"
                // Adjust the key 'files' below if the backend expects a different naming
                for (let i = 0; i < files.length; i++) {
                    formData.append('files', files[i]);
                }

                return {
                    url: '/upload/upload-multiple',
                    method: 'POST',
                    body: formData,
                };
            },
            transformResponse: (response) => {
                // The API returns an array, so map over it to fix localhost URLs mismatch
                return response.map((img) => {
                    if (img.uri) {
                        if (img.uri.includes('localhost:8070')) {
                            // the API returns `http://localhost:8070/api/v1//...` which contains a double slash
                            img.uri = img.uri.replace('http://localhost:8070', API_BASE_URL).replace('/api/v1//', '/api/v1/');
                        } else if (img.uri.startsWith('/')) {
                            img.uri = `${API_BASE_URL}${img.uri}`;
                        }
                    }
                    return img;
                });
            },
        }),
    }),
});

export const { useUploadMultipleImagesMutation } = uploadApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/apiClient';

export const bookmarkApi = createApi({
    reducerPath: 'bookmarkApi',
    baseQuery,
    tagTypes: ['Bookmark'],
    endpoints: (builder) => ({

        // GET /bookmarks
        // Response: { id, users: {...}, bookMarkList: [{post}, {post}] }
        getBookmarks: builder.query({
            query: () => '/bookmarks',
            transformResponse: (res) => {
                // Extract the full post objects from bookMarkList
                return res?.bookMarkList ?? [];
            },
            providesTags: (result = []) => [
                ...result.map((post) => ({ type: 'Bookmark', id: post.id })),
                { type: 'Bookmark', id: 'LIST' },
            ],
        }),

        // POST /bookmarks/add — body: { postIds: [id] }
        // Response: { id, users, bookMarkList: [...] }  (same shape)
        addBookmark: builder.mutation({
            query: (postId) => ({
                url: '/bookmarks/add',
                method: 'POST',
                body: { postIds: [postId] },
            }),
            invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
        }),

        // DELETE /bookmarks/remove — body: { postIds: [id] }
        removeBookmark: builder.mutation({
            query: (postId) => ({
                url: '/bookmarks/remove',
                method: 'DELETE',
                body: { postIds: [postId] },
            }),
            invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
        }),

    }),
});

export const {
    useGetBookmarksQuery,
    useAddBookmarkMutation,
    useRemoveBookmarkMutation,
} = bookmarkApi;

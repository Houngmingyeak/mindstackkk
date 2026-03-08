import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/apiClient';

// voteTypeId:  1 = UpVote,  2 = DownVote
export const VOTE_UP = 1;
export const VOTE_DOWN = 2;

export const voteApi = createApi({
    reducerPath: 'voteApi',
    baseQuery,
    tagTypes: ['Vote', 'Post'],
    endpoints: (builder) => ({

        // ── GET /votes/{voteId} ─────────────────────────────────────────────────
        getVoteById: builder.query({
            query: (voteId) => `/votes/${voteId}`,
            providesTags: (result, error, voteId) => [{ type: 'Vote', id: voteId }],
        }),

        // ── POST /votes  { postId, voteTypeId } ──────────────────────────────────
        createVote: builder.mutation({
            query: ({ postId, voteTypeId }) => ({
                url: '/votes',
                method: 'POST',
                body: { postId, voteTypeId },
            }),
            // Refresh the post so the score updates immediately
            invalidatesTags: (result, error, { postId }) => [
                { type: 'Post', id: postId },
                { type: 'Post', id: 'LIST' },
            ],
        }),

        // ── PUT /votes/{voteId}  { postId, voteTypeId } ──────────────────────────
        updateVote: builder.mutation({
            query: ({ voteId, postId, voteTypeId }) => ({
                url: `/votes/${voteId}`,
                method: 'PUT',
                body: { postId, voteTypeId },
            }),
            invalidatesTags: (result, error, { voteId, postId }) => [
                { type: 'Vote', id: voteId },
                { type: 'Post', id: postId },
                { type: 'Post', id: 'LIST' },
            ],
        }),

        // ── DELETE /votes/{voteId} ───────────────────────────────────────────────
        deleteVote: builder.mutation({
            query: (voteId) => ({
                url: `/votes/${voteId}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, voteId) => [
                { type: 'Vote', id: voteId },
                { type: 'Post', id: 'LIST' },
            ],
        }),

    }),
});

export const {
    useGetVoteByIdQuery,
    useCreateVoteMutation,
    useUpdateVoteMutation,
    useDeleteVoteMutation,
} = voteApi;

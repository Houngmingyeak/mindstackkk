import { useState, useEffect } from 'react';

/**
 * Fetches a protected image (requires Authorization header) and returns
 * a local blob URL safe to use as <img src>.
 *
 * @param {string|null|undefined} imageUrl  - The remote image URL to fetch
 * @returns {string|null} blobUrl           - Local blob URL or null while loading / on error
 */
export function useAuthImage(imageUrl) {
    const [blobUrl, setBlobUrl] = useState(null);

    useEffect(() => {
        if (!imageUrl) {
            setBlobUrl(null);
            return;
        }

        let objectUrl = null;
        let cancelled = false;

        const token =
            typeof window !== 'undefined' ? localStorage.getItem('token') : null;

        fetch(imageUrl, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Image fetch failed: ${res.status}`);
                return res.blob();
            })
            .then((blob) => {
                if (cancelled) return;
                objectUrl = URL.createObjectURL(blob);
                setBlobUrl(objectUrl);
            })
            .catch(() => {
                if (!cancelled) setBlobUrl(null);
            });

        return () => {
            cancelled = true;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [imageUrl]);

    return blobUrl;
}

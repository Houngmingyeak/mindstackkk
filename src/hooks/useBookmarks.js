import { useState, useEffect } from "react"; 

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bookmarks")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (question) => {
    setBookmarks((prev) =>
      prev.find((q) => q.id === question.id)
        ? prev.filter((q) => q.id !== question.id)
        : [...prev, question]
    );
  };

  const isBookmarked = (id) => bookmarks.some((q) => q.id === id);

  return { bookmarks, toggleBookmark, isBookmarked };
}
import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import QuestionCard from "../components/QuestionCard";
import { useGetPostsQuery } from "../features/post/postsApi";
import { formatDistanceToNow } from "date-fns";
import { useBookmarks } from "../hooks/useBookmarks";

const TABS = ["Newest", "Active", "Unanswered", "Most Voted"];

// Map tag name → avatar color
const TAG_COLORS = [
  "bg-violet-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-amber-500",
  "bg-blue-500",
];

function getColor(id) {
  return TAG_COLORS[id % TAG_COLORS.length];
}

// Convert API post → QuestionCard shape
function mapPost(post) {
  const initials = post.ownerDisplayName
    ? post.ownerDisplayName.slice(0, 2).toUpperCase()
    : "??";
  return {
    id: post.id,
    title: post.title,
    excerpt: post.body,
    tags: post.tagResponses?.map((t) => t.tagName) ?? [],
    author: {
      initials,
      name: post.ownerDisplayName ?? "Unknown",
      color: getColor(post.ownerId ?? 0),
    },
    comments: post.comments?.length ?? 0,
    views: post.viewCount ?? 0,
    time: post.creationDate
      ? formatDistanceToNow(new Date(post.creationDate), { addSuffix: true })
      : "",
  };
}

export default function QuestionsPage() {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const [activeTab, setActiveTab] = useState("Newest");

  const { data: posts, isLoading, isError } = useGetPostsQuery();

  // Sort / filter based on active tab
  const sorted = (() => {
    if (!posts) return [];
    const list = [...posts];
    if (activeTab === "Newest") {
      return list.sort(
        (a, b) => new Date(b.creationDate) - new Date(a.creationDate),
      );
    }
    if (activeTab === "Active") {
      return list.sort(
        (a, b) => new Date(b.lastActivityDate) - new Date(a.lastActivityDate),
      );
    }
    if (activeTab === "Unanswered") {
      return list.filter((p) => (p.comments?.length ?? 0) === 0);
    }
    if (activeTab === "Most Voted") {
      return list.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    }
    return list;
  })();

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Sidebar className="hidden md:block" />

      <main className="flex-1">
        <div className="flex items-center justify-between pl-8 pr-6 pt-6 pb-2">
          <h1 className="text-gray-900 dark:text-white font-bold text-[24px]">
            Questions
          </h1>
          {posts && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {posts.length} question{posts.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="px-6 py-4">
          {/* Tab Bar */}
          <div className="flex w-fit mb-5 bg-gray-200 dark:bg-gray-800 rounded-2xl p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-2xl px-4 py-1.5 text-sm font-medium transition-all duration-150
                  ${
                    activeTab === tab
                      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-slate-400 dark:text-gray-500 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* States */}
          {isLoading && (
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-4 animate-pulse"
                >
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-100 dark:bg-gray-700/60 rounded w-full mb-3" />
                  <div className="flex gap-2">
                    <div className="h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full w-16" />
                    <div className="h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full w-20" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-4">⚠️</div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Failed to load questions
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Could not connect to the server. Please try again later.
              </p>
            </div>
          )}

          {!isLoading && !isError && sorted.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-4">🤔</div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No questions found
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {activeTab === "Unanswered"
                  ? "All questions have been answered!"
                  : "Be the first to ask a question."}
              </p>
            </div>
          )}

          {!isLoading && !isError && sorted.length > 0 && (
            <div className="flex flex-col gap-4">
              {sorted.map((post) => (
                <QuestionCard key={post.id} question={mapPost(post)} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

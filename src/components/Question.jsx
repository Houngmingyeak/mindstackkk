import React, { useState } from "react";
import TagSelector from "../components/TagSelector";
import Sidebar from "../layout/Sidebar";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeTab, setActiveTab] = useState("write");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, tags: selectedTags });
  };

  const popularTags = [
    "react",
    "typescript",
    "javascript",
    "css",
    "rust",
    "go",
    "python",
    "api",
    "database",
    "ai",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div>
        <Sidebar />
      </div>
      <div className="m-8">
        <div>
          <h2 className="text-gray-950 text-[24px] font-bold ">
            Ask a Question
          </h2>
          <p className="text-sm text-gray-400">Get help from the community</p>
        </div>
        <form
          className="bg-white rounded-lg shadow-sm p-6 mt-3"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="What's your question? Be specific."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="flex border-b border-gray-300 bg-gray-50">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "write"
                      ? "bg-white text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("write")}
                >
                  Write
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "preview"
                      ? "bg-white text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("preview")}
                >
                  Preview
                </button>
              </div>

              {activeTab === "write" ? (
                <textarea
                  placeholder="Describe your problem in detail... (Markdown supported)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="8"
                  className="w-full px-4 py-3 text-sm text-gray-400 focus:outline-none resize-y"
                />
              ) : (
                <div className="p-4 min-h-[160px] text-sm text-gray-500">
                  {description || "Nothing to preview"}
                </div>
              )}
            </div>
          </div>

          <TagSelector
            popularTags={popularTags}
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
            maxTags={5}
          />

          <div className="grid grid-cols-2 border-t-2 border-gray-200 p-4 mb-5">
            <span className="text-sm text-green-800">
              {" "}
              +15 XP for asking a question
            </span>
            <button
              type="submit"
              className="ml-83 w-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-1 rounded-2xl transition-colors duration-200 active:translate-y-0.5"
            >
              Submit Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;

import React, { useState } from 'react';

const TagSelector = ({ popularTags, selectedTags, onTagsChange, maxTags }) => {
  const [customTag, setCustomTag] = useState('');

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < maxTags) {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const handleCustomTagAdd = (e) => {
    e.preventDefault();
    if (customTag && 
        !selectedTags.includes(customTag) && 
        selectedTags.length < maxTags) {
      onTagsChange([...selectedTags, customTag]);
      setCustomTag('');
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Tags (up to {maxTags})
      </label>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => handleTagClick(tag)}
            disabled={!selectedTags.includes(tag) && selectedTags.length >= maxTags}
            className={`
              px-3 py-1.5 text-sm rounded-full border transition-all duration-200
              ${selectedTags.includes(tag) 
                ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }
              ${!selectedTags.includes(tag) && selectedTags.length >= maxTags 
                ? 'opacity-50 cursor-not-allowed' 
                : 'cursor-pointer'
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTags.map(tag => (
            <span 
              key={tag} 
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleTagClick(tag)}
                className="text-gray-400 hover:text-red-500 text-base leading-none ml-1 transition-colors"
              >
                x
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSelector;
/**
 * @file ProjectFilter.jsx
 * @module ProjectFilter
 * @desc A filter UI to select project tags and filter visible projects.
 *
 * @props {string[]} tags - All possible tags
 * @props {string[]} selectedTags - Tags currently selected
 * @props {function} onChange - Callback to update selected tags
 *
 * @created May 22, 2025
 * @updated May 22, 2025
 */

import React, { useState } from 'react';
import { IoFilter } from 'react-icons/io5';

export default function ProjectFilter({ tags = [], selectedTags = [], onChange }) {
  const [expanded, setExpanded] = useState(false);

  const toggleTag = (tag) => {
    const newSelection = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onChange(newSelection);
  };

  return (
    <div className="mb-6 bg-primary/60 dark:bg-secondary/60 p-4 rounded-2xl">
      {/* Title and Toggle */}
      <div
        className="flex items-center justify-between  cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h6 className="text-xl font-semibold text-secondary dark:text-primary flex items-center gap-2">
          <IoFilter
            className={`text-lg transform transition-transform duration-300 ${
              expanded ? 'rotate-90' : 'rotate-0'
            }`}
          />
          Filter by Tags
        </h6>
      </div>

      {/* Tag Buttons */}
      {expanded && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map(tag => {
            const isActive = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`
                  px-3 py-1 rounded-full text-sm border transition cursor-pointer
                  ${isActive
                    ? 'bg-accent text-primary border-accent'
                    : 'bg-transparent text-secondary border-secondary dark:text-primary dark:border-primary'}
                  hover:bg-accent hover:text-primary
                `}
              >
                {tag}
              </button>
            );
          })}
          <button
            onClick={() => onChange([])}
            className={`
              relative group cursor-pointer
              px-4 py-1 rounded-full text-sm font-medium
              border bg-white/10 text-secondary dark:text-primary
              border-secondary dark:border-primary
              hover:bg-accent hover:text-primary
              transition
              ml-4
            `}
          >
            {/* Divider line to the left */}
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-px h-5 bg-secondary dark:bg-primary opacity-40" />
            Show All
          </button>
        </div>
      )}
    </div>
  );
}

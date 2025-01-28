/**
 * @file projectFuncs.js
 * @module projectFuncs
 * @desc Utility functions for managing project display logic. 
 * Includes logic for screen size adjustments, session storage, and visibility management.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2025-01-26
 */

export const getInitialProjects = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1534) return 8;
  if (screenWidth > 1024) return 6;
  if (screenWidth > 768) return 3;
  return 3;
};

export const getAdditionalProjects = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1534) return 4;
  if (screenWidth > 1024) return 3;
  return 3;
};

export const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSessionStorage = (key, defaultValue) => {
  const storedValue = sessionStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const getInitialVisibleCards = () => {
  return getFromSessionStorage('visibleCards', getInitialProjects());
};

export const addResizeListener = (callback) => {
  window.addEventListener('resize', callback);
};

export const removeResizeListener = (callback) => {
  window.removeEventListener('resize', callback);
};

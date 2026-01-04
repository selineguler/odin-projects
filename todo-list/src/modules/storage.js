// src/modules/storage.js

const STORAGE_KEY = "todo-projects";

export const storage = {
  save(projects) {
    try {
      const json = JSON.stringify(projects);
      localStorage.setItem(STORAGE_KEY, json);
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  },

  load() {
    try {
      const json = localStorage.getItem(STORAGE_KEY);
      if (!json) return null;
      return JSON.parse(json);
    } catch (err) {
      console.error("Error loading from localStorage", err);
      return null;
    }
  },
};


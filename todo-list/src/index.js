// src/index.js

import "./styles/style.css";
import { projectManager } from "./modules/projectManager";
import { createProject } from "./modules/project";
import { createTodo } from "./modules/todo";
import { storage } from "./modules/storage";
import { initializeUI } from "./modules/dom";

function loadFromStorage() {
  const saved = storage.load();
  if (!saved || !Array.isArray(saved) || saved.length === 0) {
    // No saved data -> create default project
    const defaultProject = createProject("Inbox");
    projectManager.projects.push(defaultProject);
    projectManager.currentProjectIndex = 0;
    return;
  }

  // Rebuild Project and Todo objects from plain JSON
  saved.forEach((projData) => {
    const project = createProject(projData.name);
    if (Array.isArray(projData.todos)) {
      projData.todos.forEach((todoData) => {
        project.todos.push(createTodo(todoData));
      });
    }
    projectManager.projects.push(project);
  });

  projectManager.currentProjectIndex = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  initializeUI(projectManager, storage);
});


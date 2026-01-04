// src/modules/projectManager.js

import { createProject } from "./project";
import { createTodo } from "./todo";

export const projectManager = {
  projects: [],
  currentProjectIndex: 0,

  getCurrentProject() {
    return this.projects[this.currentProjectIndex];
  },

  addProject(name) {
    if (!name) return;
    const project = createProject(name);
    this.projects.push(project);
    this.currentProjectIndex = this.projects.length - 1;
  },

  deleteProject(index) {
    if (index < 0 || index >= this.projects.length) return;

    this.projects.splice(index, 1);

    if (this.projects.length === 0) {
      // Always keep at least one project
      this.projects.push(createProject("Inbox"));
      this.currentProjectIndex = 0;
    } else if (this.currentProjectIndex >= this.projects.length) {
      this.currentProjectIndex = this.projects.length - 1;
    }
  },

  setCurrentProject(index) {
    if (index < 0 || index >= this.projects.length) return;
    this.currentProjectIndex = index;
  },

  addTodoToCurrent(todoData) {
    const project = this.getCurrentProject();
    const todo = createTodo(todoData);
    project.todos.push(todo);
  },

  deleteTodo(projectIndex, todoIndex) {
    const project = this.projects[projectIndex];
    if (!project) return;
    if (todoIndex < 0 || todoIndex >= project.todos.length) return;
    project.todos.splice(todoIndex, 1);
  },

  updateTodo(projectIndex, todoIndex, updatedFields) {
    const project = this.projects[projectIndex];
    if (!project) return;
    const todo = project.todos[todoIndex];
    if (!todo) return;
    Object.assign(todo, updatedFields);
  },

  toggleTodoCompleted(projectIndex, todoIndex) {
    const project = this.projects[projectIndex];
    if (!project) return;
    const todo = project.todos[todoIndex];
    if (!todo) return;
    todo.completed = !todo.completed;
  },
};


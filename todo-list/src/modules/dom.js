// src/modules/dom.js

import { format, isValid, parseISO } from "date-fns";

let pm; // projectManager
let storageRef;

let projectListEl;
let currentProjectTitleEl;
let todoListEl;
let addProjectBtn;
let addTodoBtn;

let todoModal;
let todoModalTitle;
let todoForm;
let todoTitleInput;
let todoDescriptionInput;
let todoDueDateInput;
let todoPrioritySelect;
let todoCancelBtn;

// To know whether we're editing or creating
let editContext = null; // { projectIndex, todoIndex } or null

function formatDueDate(dueDate) {
  if (!dueDate) return "No due date";
  const parsed = parseISO(dueDate);
  if (!isValid(parsed)) return dueDate;
  return format(parsed, "MMM d, yyyy");
}

function openTodoModal(mode, projectIndex = null, todoIndex = null) {
  if (mode === "create") {
    todoModalTitle.textContent = "New Todo";
    todoForm.reset();
    editContext = null;
  } else if (mode === "edit") {
    todoModalTitle.textContent = "Edit Todo";
    editContext = { projectIndex, todoIndex };
    const todo = pm.projects[projectIndex].todos[todoIndex];
    todoTitleInput.value = todo.title;
    todoDescriptionInput.value = todo.description;
    todoDueDateInput.value = todo.dueDate || "";
    todoPrioritySelect.value = todo.priority || "low";
  }

  todoModal.classList.remove("hidden");
}

function closeTodoModal() {
  todoModal.classList.add("hidden");
  editContext = null;
}

function handleTodoFormSubmit(e) {
  e.preventDefault();

  const title = todoTitleInput.value.trim();
  const description = todoDescriptionInput.value.trim();
  const dueDate = todoDueDateInput.value; // 'YYYY-MM-DD'
  const priority = todoPrioritySelect.value;

  if (!title) return;

  const todoData = {
    title,
    description,
    dueDate,
    priority,
  };

  if (editContext === null) {
    // create new
    pm.addTodoToCurrent(todoData);
  } else {
    // update existing
    pm.updateTodo(editContext.projectIndex, editContext.todoIndex, todoData);
  }

  storageRef.save(pm.projects);
  renderTodos();
  closeTodoModal();
}

function renderProjects() {
  projectListEl.innerHTML = "";

  pm.projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.classList.add("project-item");
    if (index === pm.currentProjectIndex) li.classList.add("active");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("project-name");
    nameSpan.textContent = project.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("project-delete");
    deleteBtn.textContent = "×";

    // Click to switch project (but not when clicking the delete button)
    nameSpan.addEventListener("click", () => {
      pm.setCurrentProject(index);
      storageRef.save(pm.projects);
      renderProjects();
      renderTodos();
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      pm.deleteProject(index);
      storageRef.save(pm.projects);
      renderProjects();
      renderTodos();
    });

    li.appendChild(nameSpan);
    li.appendChild(deleteBtn);
    projectListEl.appendChild(li);
  });

  currentProjectTitleEl.textContent = pm.getCurrentProject().name;
}

function renderTodos() {
  const project = pm.getCurrentProject();
  currentProjectTitleEl.textContent = project.name;
  todoListEl.innerHTML = "";

  if (project.todos.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No todos yet. Add one!";
    todoListEl.appendChild(emptyMsg);
    return;
  }

  pm.projects.forEach((proj, pIndex) => {
    if (pIndex !== pm.currentProjectIndex) return;
    proj.todos.forEach((todo, tIndex) => {
      const item = document.createElement("div");
      item.classList.add("todo-item");
      item.dataset.projectIndex = pIndex;
      item.dataset.todoIndex = tIndex;

      if (todo.priority === "low") item.classList.add("priority-low");
      if (todo.priority === "medium") item.classList.add("priority-medium");
      if (todo.priority === "high") item.classList.add("priority-high");
      if (todo.completed) item.classList.add("todo-completed");

      const main = document.createElement("div");
      main.classList.add("todo-main");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;

      checkbox.addEventListener("change", () => {
        pm.toggleTodoCompleted(pIndex, tIndex);
        storageRef.save(pm.projects);
        renderTodos();
      });

      const textWrapper = document.createElement("div");

      const titleEl = document.createElement("div");
      titleEl.classList.add("todo-title");
      titleEl.textContent = todo.title;

      const metaEl = document.createElement("div");
      metaEl.classList.add("todo-meta");
      metaEl.textContent = `${formatDueDate(todo.dueDate)} • Priority: ${
        todo.priority
      }`;

      textWrapper.appendChild(titleEl);
      textWrapper.appendChild(metaEl);

      const actions = document.createElement("div");
      actions.classList.add("todo-actions");

      const detailsBtn = document.createElement("button");
      detailsBtn.classList.add("secondary-btn");
      detailsBtn.textContent = "Details";

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("secondary-btn");
      deleteBtn.textContent = "Delete";

      actions.appendChild(detailsBtn);
      actions.appendChild(deleteBtn);

      main.appendChild(checkbox);
      main.appendChild(textWrapper);
      main.appendChild(actions);

      const details = document.createElement("div");
      details.classList.add("todo-details", "hidden");
      details.innerHTML = `
        <p><strong>Description:</strong> ${
          todo.description || "No description"
        }</p>
        <p><strong>Notes:</strong> ${todo.notes || "None"}</p>
        <button class="primary-btn todo-edit-btn">Edit</button>
      `;

      // Toggle details
      detailsBtn.addEventListener("click", () => {
        details.classList.toggle("hidden");
      });

      // Delete
      deleteBtn.addEventListener("click", () => {
        pm.deleteTodo(pIndex, tIndex);
        storageRef.save(pm.projects);
        renderTodos();
      });

      // Edit (open modal)
      details
        .querySelector(".todo-edit-btn")
        .addEventListener("click", () => {
          openTodoModal("edit", pIndex, tIndex);
        });

      item.appendChild(main);
      item.appendChild(details);
      todoListEl.appendChild(item);
    });
  });
}

export function initializeUI(projectManager, storage) {
  pm = projectManager;
  storageRef = storage;

  projectListEl = document.getElementById("project-list");
  currentProjectTitleEl = document.getElementById("current-project-title");
  todoListEl = document.getElementById("todo-list");
  addProjectBtn = document.getElementById("add-project-btn");
  addTodoBtn = document.getElementById("add-todo-btn");

  todoModal = document.getElementById("todo-modal");
  todoModalTitle = document.getElementById("todo-modal-title");
  todoForm = document.getElementById("todo-form");
  todoTitleInput = document.getElementById("todo-title");
  todoDescriptionInput = document.getElementById("todo-description");
  todoDueDateInput = document.getElementById("todo-dueDate");
  todoPrioritySelect = document.getElementById("todo-priority");
  todoCancelBtn = document.getElementById("todo-cancel-btn");

  // Event listeners
  addProjectBtn.addEventListener("click", () => {
    const name = prompt("Project name:");
    if (!name) return;
    pm.addProject(name);
    storageRef.save(pm.projects);
    renderProjects();
    renderTodos();
  });

  addTodoBtn.addEventListener("click", () => {
    openTodoModal("create");
  });

  todoCancelBtn.addEventListener("click", closeTodoModal);

  todoForm.addEventListener("submit", handleTodoFormSubmit);

  // Close modal if user clicks outside the content
  todoModal.addEventListener("click", (e) => {
    if (e.target === todoModal) {
      closeTodoModal();
    }
  });

  // Initial render
  renderProjects();
  renderTodos();
}


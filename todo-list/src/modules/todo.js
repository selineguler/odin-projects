// src/modules/todo.js

export function createTodo({
  title = "",
  description = "",
  dueDate = "",
  priority = "low",
  notes = "",
  checklist = [],
  completed = false,
} = {}) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    completed,
  };
}


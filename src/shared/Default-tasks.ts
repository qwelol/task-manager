import Task from "../models/task-model";

export const DEFAULT_TASKS: Task[] = [
  {
    id: 1,
    value: "Task 1",
    completed: true,
    selected: false,
  },
  {
    id: 2,
    value: "Task 2",
    completed: true,
    selected: false,
  },
  {
    id: 3,
    value: "Task 3",
    completed: false,
    selected: false,
  },
];

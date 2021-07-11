import { useEffect, useState } from "react";
import Card from "./Card";
import CreateForm from "./Create-form";
import { DEFAULT_TASKS } from "../shared/Default-tasks";
import Task from "../models/task-model";

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [addition, setAddition] = useState(false);

  useEffect((): void => {
    const item = localStorage.getItem("task-manager");
    const savedTasks: Task[] = item ? JSON.parse(item) : DEFAULT_TASKS;
    setTasks(savedTasks);
  }, []);

  useEffect((): void => {
    localStorage.setItem("task-manager", JSON.stringify(tasks));
  }, [tasks]);

  const setCompletion = (value: boolean): void => {
    const newTasks = tasks.map((task) => {
      if (task.selected) {
        task.completed = value;
      }
      return task;
    });

    setTasks(newTasks);
  };

  const completeTasks = (): void => {
    setCompletion(true);
  };

  const restoreTasks = (): void => {
    setCompletion(false);
  };

  const removeTasks = (): void => {
    setTasks(tasks.filter((task) => task.completed || !task.selected));
  };

  const toggleTaskSelection = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, selected: !task.selected } : task
      )
    );
  };

  const createTask = (value: string): void => {
    if (value) {
      const maxID = Math.max(...tasks.map((task) => task.id));
      const newTask = {
        id: maxID + 1,
        value,
        completed: false,
        selected: false,
      };
      setTasks([...tasks, newTask]);
      closeAddition();
    }
  };

  const toggleAddition = (): void => {
    setAddition(!addition);
  };

  const closeAddition = (): void => {
    setAddition(false);
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const activeTasks = tasks.filter((task) => !task.completed);

  const createForm = (
    <CreateForm
      header="Новая задача"
      onSubmit={createTask}
      onReset={closeAddition}
    />
  );

  let form = addition ? createForm : null;

  return (
    <div className="row">
      <div className="col w-50">
        <Card
          header="Активные задачи"
          tasks={activeTasks}
          createForm={form}
          selectItem={toggleTaskSelection}
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={completeTasks}
          >
            Завершить
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={toggleAddition}
          >
            Добавить
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={removeTasks}
          >
            Удалить
          </button>
        </Card>
      </div>
      <div className="col w-50">
        <Card
          header="Завершенные задачи"
          tasks={completedTasks}
          createForm={null}
          selectItem={toggleTaskSelection}
        >
          <button
            type="button"
            className="btn btn-warning"
            onClick={restoreTasks}
          >
            Восстановить
          </button>
        </Card>
      </div>
    </div>
  );
}

import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import CreateForm from "./components/Create-form";

const TASKS = [
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

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [addition, setAddition] = useState(false);

  const setCompletion = (value) => {
    const newTasks = tasks.map((task) => {
      if (task.selected) {
        task.completed = value;
      }
      return task;
    });

    setTasks(newTasks);
  };

  const completeTasks = () => {
    setCompletion(true);
  };

  const restoreTasks = () => {
    setCompletion(false);
  };

  const removeTasks = () => {
    setTasks(tasks.filter((task) => task.completed || !task.selected));
  };

  const toggleTaskSelection = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, selected: !task.selected } : task
      )
    );
  };

  const createTask = (value) => {
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

  const toggleAddition = () => {
    setAddition(!addition);
  };

  const closeAddition = () => {
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
    <div className="App container-xxl">
      <div className="row">
        <div className="col">
          <Card
            header="Активные задачи"
            className="col"
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
        <div className="col">
          <Card
            header="Завершенные задачи"
            className="col offset-md-1"
            tasks={completedTasks}
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
    </div>
  );
}

export default App;

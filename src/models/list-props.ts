import Task from "./task-model";

export default interface ListProps {
  tasks: Task[];
  selectItem: (id: number) => void;
  createForm: JSX.Element | null;
}

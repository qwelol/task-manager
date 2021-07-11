import Task from "./task-model";

export default interface CardProps {
  header: string;
  tasks: Task[];
  createForm: JSX.Element | null;
  selectItem: (id: number) => void;
  children: (JSX.Element | HTMLElement)[] | (JSX.Element | HTMLElement) | null;
}

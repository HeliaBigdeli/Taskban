import { ITask } from "./task";

export interface IData {
  id: number;
  color: string,
  is_archive: boolean;
  name: string;
  order: number;
  tasks: ITask[];
  tasks_count: number
}

export interface IProps {
  data: IData[]
}

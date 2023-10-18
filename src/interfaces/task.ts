import { IMember } from "./members";

export interface ITask {
    id: number,
    name: string,
    description: string,
    deadline: string,
    priority: number,
    attachment: string,
    thumbnail: string,
    order: number,
    members: IMember[]
}
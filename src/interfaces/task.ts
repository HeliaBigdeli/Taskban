import { members_thumb } from "./members_thumb";

export interface ITask {
    id: number,
    name: string,
    description: string,
    deadline: string,
    priority: number,
    attachment: string,
    thumbnail: string,
    order: number,
    members: members_thumb[]
}
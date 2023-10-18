interface iTask {
    id: number;
    name: string;
    img: string;
}

export interface IData {
    id: number,
    is_archive: boolean,
    name: string
    order: number,
    tasks: iTask[],
    tasks_count: number
}

export interface IProps {
    data: IData[]
}
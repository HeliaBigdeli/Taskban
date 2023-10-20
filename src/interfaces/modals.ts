export interface IEdit {
    currentID: number,
    value: boolean;
    setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    previousValue: string; 
    type?: "workSpace" | "project" | "board";
}

export interface IAlert {
    isAlertOpen:boolean;
    setIsAlertOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    alertText: string;
    className: string;
    handleYes: () => void;
}
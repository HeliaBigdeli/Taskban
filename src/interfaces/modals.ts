export interface IEdit {
    value: boolean;
    setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    previousValue: string;
}

export interface IAlert {
    isAlertOpen:boolean;
    setIsAlertOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    alertText: string;
    className: string;
    handleYes: () => void;
}
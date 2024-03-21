export interface trackDTO {
    id?: number;
    called: string;
    unCalled: string;
    desc: string;
    date: date;
    notebookId: number;
}
export interface trackCreationDTO {
    date: date;
    desc: string;
    called: string;
    unCalled: string;
}
export interface trackGridItemDTO {
    id?: number;
    called: string;
    unCalled: string;
    notebookNumber: number;
    desc: string;
    date: date;
    notebookId: number;
}
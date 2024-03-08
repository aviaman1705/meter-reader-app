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
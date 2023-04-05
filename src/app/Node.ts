export interface Node {
    id: number;
    name: string;
    children?: Node[];
    showChildren?: boolean;
}
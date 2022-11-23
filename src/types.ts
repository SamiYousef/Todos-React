export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export enum LinkType {
  All,
  Active,
  Completed
}

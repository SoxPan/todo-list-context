import { createContext } from "react";

export interface ITodo {
    name: string;
    completed: boolean;
}

interface ITodoContext {
    data: ITodo[];
    updateData: Function;
}

export const TodoContext = createContext<ITodoContext>({
    data: [],
    updateData: (data: ITodo[]) => {
        throw new Error('updateData not implemented')
    }
})
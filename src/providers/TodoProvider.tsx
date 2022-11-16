import {FC, ReactNode, useState} from "react";
import {ITodo, TodoContext} from "../contexts/TodoContext";

interface ITodoProvider {
    children: ReactNode
}

export const TodoProvider:FC<ITodoProvider> = ({children}) => {

    const [data, setData] = useState<ITodo[]>([]);

    const updateData = (data: ITodo[]) => {
        setData(data);
    }

    return (
        <TodoContext.Provider value={{data, updateData}}>
            {children}
        </TodoContext.Provider>
    )
}
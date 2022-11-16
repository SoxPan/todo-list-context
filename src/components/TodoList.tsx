import React, { useContext, useRef } from "react"
import { ITodo, TodoContext } from "../contexts/TodoContext"

export const TodoList = () => {

    const {data: todoData, updateData: updateTodoData} = useContext(TodoContext);
    const formRef = useRef<HTMLFormElement>(null);

    const handleDelete = (name: string) => {
        const payload = todoData.filter(item => item.name !== name)
        updateTodoData(payload);
    }

    const handleCreate = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const {target} = event as typeof event & {target: {name: { value: string };}}
        const name = target.name.value;
        updateTodoData([
            ...todoData,
            {
                name: name,
                completed: false
            }
        ])
        formRef?.current?.reset();
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between" >
                <div className="py-3">
                    <h3>Todo List</h3>
                </div>
                <form ref={formRef} className="py-3 d-flex justify-content-between" onSubmit={handleCreate}>
                    <input type="text" name="name" className="form-control" />
                    <button type="submit" className="btn btn-primary mx-1">Add</button>
                </form>
            </div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td width="200">Status</td>
                        <td width="150" align="right">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoData?.map((item: ITodo, index) => (
                            <tr key={`todo-${index}`}>
                                <td>{item.name}</td>
                                <td>
                                    {item.completed 
                                    ? <span className="badge badge-info">Completed</span> 
                                    : <span className="badge badge-secondary">Not Completed</span>
                                    }
                                </td>
                                <td align="right">
                                    <button
                                        onClick={() => {handleDelete(item.name)}}
                                        type="button" 
                                        className="btn btn-danger btn-sm"
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
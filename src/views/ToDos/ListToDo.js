import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';
class ListToDo extends React.Component {
    state = {
        listToDos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Listening music' }
        ],
        //chứa object cần xóa
        editTodo: {}
    }
    addToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Wow so easy!")
    }
    handleDeleteClick = (toDo) => {
        //console.log("check:", toDo)
        let currentToDos = this.state.listToDos
        //lặp lại loại bỏ 
        currentToDos = currentToDos.filter((item) => item.id !== toDo.id)
        this.setState({
            listToDos: currentToDos
        })
        toast.success("Xóa thành công")
    }
    handleEditClick = (todo) => {
        let { listToDos, editTodo } = this.state
        let isEmptyObject = Object.keys(editTodo) === 0
        //nhấn nút Save        
        if (isEmptyObject === false && editTodo.id == todo.id) {
            let index = listToDos.findIndex((item) => item.id == todo.id)
            listToDos[index].title = editTodo.title
            this.setState({
                listToDos: listToDos,
                editTodo: ''
            })
            toast.success("Cập nhật thành công")
            return

        }

        //nhấn nút Edit
        //khi nút editS được nhấn, editTodo sẽ nhận giá trị là object cần xóa
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEdit = (event) => {
        let editToDoCopy = { ...this.state.editTodo }
        editToDoCopy.title = event.target.value
        this.setState({
            editTodo: editToDoCopy
        })

    }
    render() {
        let { listToDos, editTodo } = this.state
        //let listToDos=this.state.listToDos
        //kiểm tra object cần sửa có không
        let isEmptyObject = Object.keys(editTodo) === 0
        console.log(isEmptyObject)
        return (
            <div className="list-todo-container">
                {/* Tách component */}
                <AddToDo addNewToDo={this.addToDo} />
                <div className="list-todo-content">
                    {
                        listToDos && listToDos.length > 0 &&
                        listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObject === true ?
                                        <span>{index + 1}: {item.title}</span>
                                        :
                                        <>{editTodo.id == item.id ?
                                            <span>
                                                {index + 1} : <input type="text" value={editTodo.title} onChange={(event) => this.handleOnChangeEdit(event)} />
                                            </span>
                                            :
                                            <span>{index + 1}: {item.title}</span>
                                        }
                                        </>

                                    }
                                    <input type="button" value={isEmptyObject === false && editTodo.id === item.id ? "Save" : "Edit"} onClick={() => this.handleEditClick(item)} />
                                    <input type="button" value="Delete" onClick={() => this.handleDeleteClick(item)} />
                                </div>)
                        })

                    }



                </div>

            </div>)
    }
}
export default ListToDo
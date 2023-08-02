import React from "react";
import { toast } from 'react-toastify';
class AddToDo extends React.Component {
    state = {
        title: ''
    }
    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAdd = () => {
        //alert("Click me")
        if (!this.state.title) {
            toast.error("Lỗi nhập liệu")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10001),
            title: this.state.title
        }
        //gọi ngược lên cha để thêm
        this.props.addNewToDo(todo)
        //gọi xong xóa rỗng input
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.onChangeTitle(event)} />
                <input type="button" value="Add" onClick={(event) => this.handleClickAdd(event)} />
            </div>
        )
    }

}
export default AddToDo
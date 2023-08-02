import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleOnChangeJob = (event) => {
        this.setState({
            title: event.target.value
        })

    }
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })

    }
    handleClickSubmit = (event) => {
        //ngăn chặn submit xong refresh trình duyệt
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Chưa nhập liệu')
            return
        }

        // alert('submit')
        //lấy data thử
        console.log("check split compoent:", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary

        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>

                Job: <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeJob(event)} />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)} />
                <input type="submit" onClick={(event) => this.handleClickSubmit(event)} value="Gửi dữ liệu" />

            </form>
        )
    }

}
export default AddComponent
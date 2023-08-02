import React from "react";
import ChildComponent1 from "./ChildComponent1";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    //tạo state, không đặt tên khác được
    state = {
        name: 'Yen',
        channel: 'teacher',
        //dữ liệu này sẽ load từ db
        arrJobs: [
            { id: 'j1', title: 'job 1', salary: '100' },
            { id: 'j2', title: 'job 2', salary: '200' },
            { id: 'j3', title: 'job 3', salary: '300' }
        ]
    }
    //event là biến global của sự kiện onChange
    handleOnChangeName = (event) => {
        //setState là hàm
        //không nên dùng bad code: this.state.name=event.target.value
        this.setState({
            name: event.target.value
        })
        // this.setState(this.statessss, { name: event.target.value })
    }
    clickComponent = () => {
        alert('Component click')
    }
    //đây là function, không cần từ khóa function
    //this chỉ class đang làm việc
    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                <div>My channel: {this.state.channel}</div>
                <div>Welcome: {this.state.name}</div>
                <button onClick={() => this.clickComponent()}>Click component</button>
                <button onClick={this.clickComponent}>Click component 2</button>
                //cha truyền dữ liệu qua con, name là 1 prop
                {/* <ChildComponent1 name={this.state.name} age={'25'} address={'Tiền Giang'} job={this.state.arrJobs} /> */}

            </React.Fragment>
        )


    }
}
class FormComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'j1', title: 'job 1', salary: '100' },
            { id: 'j2', title: 'job 2', salary: '200' },
            { id: 'j3', title: 'job 3', salary: '300' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log("check job parent:", job)

    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id != job.id)
        this.setState({
            arrJobs: currentJobs
        })

    }
    render() {
        return (
            <>

                <div>Form Test Spit component</div>
                <AddComponent addNewJob={this.addNewJob} />
                {console.log("array job parent:", this.state.arrJobs)}
                <ChildComponent1 name={this.state.name} age={'25'} address={'Tiền Giang'} job={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </>

        )
    }
}
//xuất ra để sử dụng, thêm dấu {} nếu xuất nhiều
export default { MyComponent, FormComponent }
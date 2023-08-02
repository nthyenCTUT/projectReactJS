import React from "react";
import './Demo.scss'
class ChildComponent1 extends React.Component {
    state = {
        showJobs: false
    }
    hanleShowHide = (status) => {
        this.setState(
            {
                showJobs: !this.state.showJobs
            })
    }
    //truyền vào item
    handleOnClickDelete = (job) => {
        //test dữ liệu đã lấy
        // console.log('Xóa job', job)
        this.props.deleteAJob(job)
    }
    render() {

        //cú pháp đơn giản - dùng key giống trong object
        let { job } = this.props
        let { showJobs } = this.state
        let check = showJobs === true ? true : false
        console.log("conditional:", check)
        return (
            <>
                <div>
                    {showJobs === false ? <button onClick={() => this.hanleShowHide()} className="btn-show" style={{ background: 'yellow', fontSize: '40px' }}>Show</button>
                        :
                        <>
                            {job.map((item, index) => {

                                return (<div key={item.id}>{item.title} - {item.salary} <span onClick={() => this.handleOnClickDelete(item)}>x</span></div>)


                            })}
                            <button onClick={() => this.hanleShowHide()}>Hide</button>
                        </>
                    }
                </div >
            </>
        )
    }



}

export default ChildComponent1
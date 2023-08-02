import React from "react";
import axios from "axios";
import './ListUsers.scss'
//muốn chuyển trang phải sử dụng
import withNavigateHook from './withNavigationHook'
import { Routes, Route, useParams } from 'react-router-dom';
class ListUsers extends React.Component {
    //xây dựng biến để chứa dữ liệu lấy được
    state = {
        listUsers: []
    }
    //    //cach 1
    //     componentDidMount() {
    //         axios.get('https://reqres.in/api/users?page=1')
    //lấy data xong mới chạy vào then
    //             .then(function (response) {
    //                 console.log(response.data.data);
    //             })
    //         // .then(res => {
    //         //     console.log(res);
    //         // })

    //     }
    //cách 2: bất đồng bộ, do hành động tốn nhiều thời gian thì phải chờ
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        //console.log(res.data.data);
        //set dữ liệu vào biến state, dữ liệu lưu vào biến thì mới render được
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        //console.log()
    }
    handleClickDetailUser = (item) => {
        console.log("Check user params:", this.props.navigation)
        this.props.navigation(`${item.id}`)
    }
    render() {
        let { listUsers } = this.state
        //render chạy lần 1, componentDidMount chạy lần 2
        return (<div>
            <div>List users</div>
            <div>

                {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                    return (
                        <div class="child" key={item.id} onClick={() => this.handleClickDetailUser(item)}>
                            {index + 1} -
                            {item.first_name} -
                            {item.last_name}
                        </div>
                    )
                })}



            </div>
        </div >)

    }
}
export default withNavigateHook(ListUsers)
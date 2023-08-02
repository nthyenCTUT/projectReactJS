import React from "react";
import axios from "axios";
import './ListUsers.scss'
//muốn chuyển trang phải sử dụng
import withNavigateHook from './withNavigationHook'
import { Routes, Route, useParams } from 'react-router-dom';
class GetAllUsersFromAPI extends React.Component {
    //xây dựng biến để chứa dữ liệu lấy được
    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:8080/api/v1/getAllUsers', { crossdomain: true })
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
                            {item.firstname} -
                            {item.lastname}
                        </div>
                    )
                })}



            </div>
        </div >)

    }
}
export default withNavigateHook(GetAllUsersFromAPI)
import React from "react";
import withRouter from './withRouter';

import axios from "axios";
class DetailUser extends React.Component {
    //sau khi lấy được dữ liệu từ axios.get thì dùng biến state để chứa dữ liệu để có thể in ra màn hình
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.params) {
            let id = this.props.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log("prop detail:", this.props)
            this.setState({
                user: res && res.data.data ? res.data.data : {}
            })
        }
    }
    handleClickBack = () => {
        this.props.navigate('/users')
    }
    render() {
        let { user } = this.state
        let isEmptyObject = Object.keys(user).length === 0
        return (
            <>
                {isEmptyObject == false && <>

                    <div>Detail User {this.props.params.id}</div>
                    <div>User name: {user.first_name}</div>
                    <div>User email: {user.email}</div>
                    <div><img src={user.avatar} /></div>
                    <div><input type="button" value="Back" onClick={() => this.handleClickBack()} /></div>
                </>
                }
            </>
        )
    }

}
export default withRouter(DetailUser)


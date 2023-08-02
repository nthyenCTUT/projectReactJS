import React from "react";
import hoa from './../../assets/images/hoa.jpg'
import { connect } from "react-redux";
class Home extends React.Component {
    handleDeleteUser = (item) => {
        //console.log("Xóa:", item)
        this.props.deleteUserRedux(item)

    }
    handleAddUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log("check props moi:", this.props.dataRedux)
        let listUsers = this.props.dataRedux

        return (
            <>
                <div>
                    Home - index
                    <img src={hoa} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (<div key={item.id}>
                                {index + 1} - {item.name} -
                                <span onClick={() => this.handleDeleteUser(item)}>X</span>

                            </div>)

                        })

                    }
                    <input type="button" onClick={() => this.handleAddUser()} value="Add new" />
                </div>
            </>)
    }
}
// export default Home
//Tạo liên kết giữa Redux (đưa state của Redux) với React Component Home (thành Props)
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
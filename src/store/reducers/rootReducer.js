//state là trạng thái của Redux, action là từ React truyền qua Redux
const initState = {
    users: [
        { id: 1, name: 'Yến' },
        { id: 2, name: 'Phước' },
        { id: 3, name: 'Sơn' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            console.log('run user', action)
            let users = state.users
            users = users.filter(item => item.id != action.payload.id)
            return {
                ...state, users
            }
        case "ADD_USER":
            let id = Math.floor(Math.random() * 1000)
            let user = { id: id, name: `random -${id}` }
            return {
                ...state, users: [...state.users, user]
            }

    }
    return state
}
export default rootReducer
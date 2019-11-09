const INITIAL_STATE = {
    id : 0,
    username : '',
    role : '',
    email: '',
    cookie : false,
    loading : false,
    msg : ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN' : // untuk mengubah akun stelah login
            return {...INITIAL_STATE, username : action.payload.username, id : action.payload.id, role : action.payload.role, email: action.payload.email}
        case 'RESET_USER' : // untuk log out,,jadi global statenya kosong lagi
            return {...INITIAL_STATE}
        case 'USER_UDA_ADA' :
            return {...INITIAL_STATE, msg : action.hasil}
        case 'KEEP_LOGIN' :
            return {...INITIAL_STATE, username : action.payload.username, id : action.payload.id, role : action.payload.role, cookie : true}
            default : 
        return state
    }
}
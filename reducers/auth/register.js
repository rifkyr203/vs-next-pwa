import {REGISTER} from '../../constants/auth/register'

export default (state = {}, action) => {
    switch (action.type){
        case REGISTER.REQUEST:
            console.log("register reducer")
            return state
        default:
            return state
    }
}
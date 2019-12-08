import {takeEvery} from 'redux-saga/effects'


function* register(){
    console.log("register saga")
}

export default function* watchRegisterSaga(){
    yield takeEvery("REGISTER_REQUEST", register)
}
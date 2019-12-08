import { all } from 'redux-saga/effects'
import 'isomorphic-unfetch'
import registerSaga from './auth/register'


const sagas = [
    registerSaga()
]

function* rootSaga() {
    yield all(sagas)
}
export default rootSaga
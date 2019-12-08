import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {register} from '../actions/auth/register'

const Home = () => {
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(register())
  }, [])
  return <h1>Virtual Spirit's Boilerplate</h1>
}

export default Home

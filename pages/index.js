import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {register} from '../actions/auth/register'
import Link from 'next/link'

const Home = () => {
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(register())
  }, [])
  return (
    <div>
      <Link href="/register">
        <a className="btn btn-danger">Register</a>
      </Link>
      <Link href="/login">
        <a className="btn btn-warning">Login</a>
      </Link>
    </div>
  )
}

export default Home

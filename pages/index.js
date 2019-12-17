import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {register} from '../actions/auth/register'
import Link from 'next/link'
import Layout from '../components/layout'

const Home = () => {
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(register())
  }, [])
  return (
    <Layout title="Login" nav={true}>
      asd
    </Layout>
  )
}

export default Home

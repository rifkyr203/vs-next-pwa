import {useEffect} from 'react'
import {Router} from 'route'

const Home = () => {
  useEffect(() => {
    Router.pushRoute('children-home')
  }, [])
  return ''
}

export default Home

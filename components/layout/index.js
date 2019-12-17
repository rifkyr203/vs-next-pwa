

import Header from './header'
import Navigation from './navigation'



const Layout = ({children, title, nav}) => {
  return (
    <>
      <Header title={title}/>
        {children}
      {nav && <Navigation/>}
    </>
  )
}

export default Layout

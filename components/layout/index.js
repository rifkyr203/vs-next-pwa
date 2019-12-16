

import Header from './header'
import Navigation from './navigation'



const Layout = ({children, header, nav}) => {
  return (
    <>
      <Header title={header}/>
        {children}
      {nav && <Navigation/>}
    </>
  )
}

export default Layout

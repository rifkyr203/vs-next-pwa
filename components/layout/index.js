

import Header from './header'
import Navigation from './navigation'



const Layout = ({children, title, nav, white}) => {
  return (
    <>
      <Header title={title} white={white}/>
        {children}
      {nav && <Navigation/>}
    </>
  )
}

export default Layout

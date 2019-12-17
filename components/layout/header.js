import Router from 'next/router'
import logo from 'public/images/logo.png'

const Header = ({title, white}) => {
  return (
      <div className={white ? 'header-white': 'header'}>
        <div className="header-container h-100 d-flex align-items-center">
          {!white && 
            <>
              <span className="icon icon-chevron pointer" style={{background: "#fff"}} onClick={() => Router.back()}></span>
              <div className="d-flex w-100 justify-content-center">
                <span className="text-white proximanova-18-semibold">{title}</span>
              </div>
            </>
          }
          {white && <>
          <div className="d-flex justify-content-center w-100 position-relative">
            <img src={logo}  width="144px" height="36px"/>
            <div className="position-absolute" style={{right: "15px", top: "50%", transform: "translateY(-40%)"}}>
              <span className="icon icon-bell pointer"></span>
            </div>
          </div>
          </>}
        </div>
      </div>
  )

}

export default Header

import Router from 'next/router'


const Header = ({title}) => {
  return (
      <div className="header">
        <div className="header-container h-100 d-flex align-items-center">
          <span className="icon icon-chevron pointer" style={{background: "#fff"}} onClick={() => Router.back()}></span>
          <div className="d-flex w-100 justify-content-center">
            <span className="text-white proximanova-18-semibold">{title}</span>
          </div>
        </div>
      </div>
  )

}

export default Header

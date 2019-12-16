const Navigation = () => {

  return (
    <div className="nav-container d-flex">
      <div className="col-md-3 d-flex flex-column align-items-center justify-content-center nav-item active">
        <span className="icon icon-home" style={{width: "24px", height: "24px"}}></span>
        <p className="proximanova-10 mb-0">Home</p>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-center justify-content-center nav-item">
        <span className="icon icon-browse" style={{width: "24px", height: "24px"}}></span>
        <p className="proximanova-10 mb-0">Browse</p>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-center justify-content-center nav-item">
        <span className="icon icon-course" style={{width: "24px", height: "24px"}}></span>
        <p className="proximanova-10 mb-0">My Favorite</p>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-center justify-content-center nav-item">
        <span className="icon icon-profile" style={{width: "24px", height: "24px"}}></span>
        <p className="proximanova-10 mb-0">Profile</p>
      </div>
    </div>
  )

}

export default Navigation

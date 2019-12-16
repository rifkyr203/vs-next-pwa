
const ForgotPasswordComponent = () =>{
  return (
      <div className="main-container">
        <p className="proximanova-20-bold mb-1">Reset Password</p>
        <p className="proximanova-14 text-color-1">Resetting your password is easy, just tell us your email<br/>address</p>
        <div>
          <p className="proximanova-14 text-color-1 mb-0 mt-4">Email Address</p>
          <input type="email" className="proximanova-16 form-control custom-input"/>
        </div>
        <div className="absolute-container" style={{bottom: "20px"}}>
          <button type="submit" className="proximanova-14-semibold btn main-btn text-white">RESET PASSWORD</button>
        </div>
      </div>
  )
}

export default ForgotPasswordComponent

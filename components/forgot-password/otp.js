import ReactCodeInput from 'react-verification-code-input'

const ForgotPasswordOTPComponent = () =>{
  return (
      <div className="main-container">
        <p className="proximanova-20-bold mb-1">Reset Password</p>
        <p className="proximanova-14 text-color-1">Enter reset password code we’ve been sent to your<br/>email address <span className="proximanova-14-semibold text-color-main">guicon@mail.com</span></p>
          <ReactCodeInput fields={5} className="otp-input-container"/>
        <button type="submit" className="proximanova-14-semibold btn main-btn text-white">SUBMIT</button>
        <div className="d-flex flex-column align-items-center mt-4">
          <p className="proximanova-12 text-color-2 mb-1">Didn’t Receive Code?</p>
          <a className="proximanova-12 text-color-main pointer">Send Again <span className="proximanova-12 text-color-2">(30s)</span></a>
        </div>
      </div>
  )
}

export default ForgotPasswordOTPComponent

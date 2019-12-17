import book from '../../public/images/5.png'
import ReactCodeInput from 'react-verification-code-input'



const ForgotPasswordOTPComponent = () =>{
  return (
      <div className="full-container">
        <div className="d-flex flex-column align-items-center justify-content-center h-75">
          <img src={book} width="136px" height="136px"/>
          <p className="proximanova-24-bold text-center text-color-3">Change<br/>Password Success</p>
          <p className="proximanova-14 text-color-1 text-center">Your password has been changed successfully</p>
          <div className="d-flex justify-content-center">
            <button type="submit" className="proximanova-14-semibold btn main-btn text-white" style={{width: "260px"}}>DONE</button>
          </div>
        </div>
      </div>
  )
}

export default ForgotPasswordOTPComponent

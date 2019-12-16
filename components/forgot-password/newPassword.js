import {useState} from 'react'

const NewPasswordComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
      <div className="main-container">
        <p className="proximanova-20-bold mb-1">Reset Password</p>
        <div className="position-relative">
          <p className="proximanova-14 text-color-1 mb-0 mt-4">Password</p>
          <input type={showPassword ? 'text':'password'} className="proximanova-16 form-control custom-input" style={{paddingRight: "30px"}}/>
          <span className="icon icon-eye position-absolute pointer" style={{right: "0", bottom: "10px"}} onClick={() => setShowPassword(prevState => !prevState)}></span>
        </div>
        <div className="position-relative">
          <p className="proximanova-14 text-color-1 mb-0 mt-4">Confirm Password</p>
          <input type={showConfirmPassword ? 'text':'password'} className="proximanova-16 form-control custom-input" style={{paddingRight: "30px"}}/>
          <span className="icon icon-eye position-absolute pointer" style={{right: "0", bottom: "10px"}} onClick={() => setShowConfirmPassword(prevState => !prevState)}></span>
        </div>
        <div className="absolute-container" style={{bottom: "20px"}}>
          <button type="submit" className="proximanova-14-semibold btn main-btn text-white">CHANGE PASSWORD</button>
        </div>
      </div>
  )
}

export default NewPasswordComponent

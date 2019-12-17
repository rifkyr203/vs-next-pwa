import {useState} from 'react'


const RegisterChildrenComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  return (
    <div className="main-container" style={{paddingBottom: "65px"}}>
      <div>
        <p className="proximanova-14 text-color-1 mb-0">Name</p>
        <input type="text" className="proximanova-16 form-control custom-input"/>
      </div>
      <div className="mt-4">
        <p className="proximanova-14 text-color-1 mb-0">Email address</p>
        <input type="email" className="proximanova-16 form-control custom-input"/>
      </div>
      <div className="mt-4">
        <p className="proximanova-14 text-color-1 mb-0">Date of Birth</p>
        <input type="email" className="proximanova-16 form-control custom-input"/>
      </div>
      <div className="mt-4">
        <p className="proximanova-14 text-color-1 mb-0">Gender</p>
        <input type="email" className="proximanova-16 form-control custom-input"/>
      </div>
      <div className="mt-4">
        <p className="proximanova-14 text-color-1 mb-0">Parent Code</p>
        <input type="email" className="proximanova-16 form-control custom-input"/>
      </div>
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
      <p className="proximanova-12 text-color-2 mt-4">By clicking Sign Up, you agree to our <a className="text-color-main pointer">Terms of Service</a> and that you have to read our <a className="text-color-main pointer">Privacy Policy</a>.</p>
      <div className="absolute-container" style={{bottom: "20px"}}>
        <button type="submit" className="proximanova-14-semibold btn main-btn text-white">SIGN UP</button>
      </div>
    </div>
  )
}

export default RegisterChildrenComponent

import {useState} from 'react'
import Link from 'next/link'

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="main-container">
      <p className="proximanova-20-bold mb-0">
        Hi!<br/>
        Welcome Back
      </p>
      <div>
        <p className="proximanova-14 text-color-1 mb-0 mt-4">Email Address</p>
        <input type="email" className="proximanova-16 form-control custom-input"/>
      </div>
      <div className="position-relative">
        <p className="proximanova-14 text-color-1 mb-0 mt-4">Password</p>
        <input type={showPassword ? 'text':'password'} className="proximanova-16 form-control custom-input" style={{paddingRight: "30px"}}/>
        <span className="icon icon-eye position-absolute pointer" style={{right: "0", bottom: "10px"}} onClick={() => setShowPassword(prevState => !prevState)}></span>
      </div>
      <div className="my-4">
        <button type="submit" className="btn main-btn text-white proximanova-14-semibold">LOGIN</button>
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/forgot-password">
          <a className="proximanova-14 text-color-main">Forgot Password?</a>
        </Link>
      </div>
    </div>
  )
}

export default LoginComponent

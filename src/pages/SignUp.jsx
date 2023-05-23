import { useState } from "react"
import Link from "next/link"
import ArrowRightIcon from '../../public/assets/svg/keyboardArrowRightIcon.svg'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    return (
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Welcome Back!</p>
            </header>

            <form>
                <input 
                    type="text" 
                    className="nameInput" 
                    placeholder="Name" 
                    id="name" 
                    value={name} 
                    onChange={onChange} 
                />
                <input 
                    type="email" 
                    className="emailInput" 
                    placeholder="Email" 
                    id="email" 
                    value={email} 
                    onChange={onChange} 
                />

                <div className="passwordInputDiv">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="passwordInput"
                        placeholder="Password" 
                        id="password" 
                        value={password} 
                        onChange={onChange} 
                    />

                    <img 
                        src="/assets/svg/visibilityIcon.svg" 
                        alt="show password" 
                        className="showPassword"
                        onClick={() => setShowPassword((prevState) => !prevState)}    
                    />
                </div>

                <Link href="/ForgotPassword" className="forgotPasswordLink">
                    Forgot Password
                </Link>

                <div className="signUpBar">
                    <p className="signUpText">
                        Sign Up
                    </p>
                    <b className="signUpButton">
                        <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                    </b>
                </div>

            </form>

            {/* {Google OAuth} */}

            <Link href="/SignIn" className="registerLink">
                Sign In Instead 
            </Link> 
        </div>
  )
}

export default SignUp


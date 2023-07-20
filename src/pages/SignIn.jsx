import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { app } from "../../firebase.config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import ArrowRightIcon from '../../public/assets/svg/keyboardArrowRightIcon.svg'

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = formData
    
    const router = useRouter()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const auth = getAuth(app)
    
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
            if (userCredential.user) {
                router.push('/Profile')
            }            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Welcome Back!</p>
            </header>

            <form onSubmit={onSubmit}>
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

                <div className="signInBar">
                    <p className="signInText">
                        Sign In
                    </p>
                    <button className="signInButton">
                        <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                    </button>
                </div>
            </form>

            {/* {Google OAuth} */}

            <Link href="/SignUp" className="registerLink">
                Sign Up Instead 
            </Link> 
        </div>
  )
}

export default SignIn


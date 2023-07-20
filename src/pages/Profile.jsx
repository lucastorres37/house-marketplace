import { useEffect, useState } from "react"
import { app } from "../../firebase.config"
import { getAuth } from "firebase/auth"

function Profile() {
    const [user, setUser] = useState(null)
    
    const auth = getAuth(app)
    useEffect(() => {
        setUser(auth.currentUser)
    }, [])
    
    return user ? <h1>{user.displayName}</h1> : "Not Logged In"    
}  

export default Profile
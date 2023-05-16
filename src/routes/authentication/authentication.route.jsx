//SIGN IN WITH GOOGLE REDIRECT COMMENTED OUT
// import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
//import { signInWithGooglePopUp, createUserDocFromAuth /*signInWithGoogleRedirect, auth*/ } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.components";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
    // useEffect(async () => {
    //     const res = await getRedirectResult(auth);
        
    //     if (res) {
    //         const userDocRef = await createUserDocFromAuth(res.user);
    //     }
    // }, [])

    return ( 
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
     );
}
 
export default Authentication;
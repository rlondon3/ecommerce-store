//SIGN IN WITH GOOGLE REDIRECT COMMENTED OUT
// import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import { signInWithGooglePopUp, createUserDocFromAuth /*signInWithGoogleRedirect, auth*/ } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.components";

const SignIn = () => {
    // useEffect(async () => {
    //     const res = await getRedirectResult(auth);
        
    //     if (res) {
    //         const userDocRef = await createUserDocFromAuth(res.user);
    //     }
    // }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocFromAuth(user);
    }

    return ( 
        <div>
            <h1>Sign-In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
     );
}
 
export default SignIn;
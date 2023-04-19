import { useState } from "react";
import { createUserDocFromAuth, signInWithGooglePopUp, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormField = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopUp();
        await createUserDocFromAuth(user);
    }

    const clearForm = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(res)
            clearForm();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong password':
                    alert('Incorrect Password!');
                break;
                case 'auth/user-not-found':
                    alert('User Not Found!');
                break;
                default:
                    console.error(`Sign-in error: ${error.message}`)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return ( 
        <div className="sign-up-container">
        <h2>Already have an account?</h2>
            <span>Sign-in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password} />
                <div  className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
     );
}
 
export default SignInForm;
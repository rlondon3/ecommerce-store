import { useState } from "react";
import { createAuthUserWithEmailandPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss"

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const clearForm = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //confirm passwords match
        if (password !== confirmPassword) return alert('Passwords do not match!')
        try {
            const { user } = await createAuthUserWithEmailandPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            clearForm();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("User already signed up.")
            }
            console.error(`Sign-up error: ${error.message}`)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return ( 
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
            <span>Sign-up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required  onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type='pasword' required onChange={handleChange} name="confirmPassword"  value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
     );
}
 
export default SignUpForm;
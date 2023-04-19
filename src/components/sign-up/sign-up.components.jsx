import { useState } from "react";
import { createAuthUserWithEmailandPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

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
        <div>
            <h1>Sign-up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type='text' required  onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type='email' required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type='pasword' required onChange={handleChange} name="confirmPassword"  value={confirmPassword} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;
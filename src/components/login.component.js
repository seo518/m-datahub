import React ,{useState} from "react";
import { Auth } from 'aws-amplify';


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
      async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          await Auth.signIn(email, password);
          alert("Logged in");
        } catch (e) {
          alert(e.message);
        }
      }
        return (
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={email} className="form-control" placeholder="Enter email"  onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit"  className="btn btn-primary btn-block"disabled={!validateForm()} >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    
}

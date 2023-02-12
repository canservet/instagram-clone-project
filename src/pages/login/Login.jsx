import { Button, TextField } from "@mui/material"
import "./login.css"

const Login = () => {
  return (
    <div className="auth-page ">
     <h1> Welcome to social Media APP</h1>
     <form action="/ " className="form">
        <h2>Login </h2>
       
        
        <div className="form-input">
        <TextField required type="text"   label="Email" variant="outlined" />
        </div>


        <div className="form-input">
        <TextField required type="password"   label="Password" variant="outlined" />
        </div>


      
      <a href="/" className="auth-link ">
       Go to Register
      </a>
      <Button type="submit" variant="contained" color="success"> Register </Button>

     </form>
    </div>
  )
}

export default Login

import { Button, TextField } from "@mui/material"
import "./register.css"

const Register = () => {
  return (
    <div className="auth-page ">
     <h1> Welcome to social Media APP</h1>
     <form action="/ " className="form">
        <h2>Register </h2>
        <div className="form-input">
        <TextField required type="text"  id="outlined-basic" label="Full Name" variant="outlined" />
        </div>
        <div className="form-input">
        <TextField required type="text"   label="username" variant="outlined" />
        </div><div className="form-input">
        <TextField required type="text"   label="email" variant="outlined" />
        </div>
        <div className="form-input">
        <TextField required type="password"   label="Password" variant="outlined" />
        </div>
        <div className="form-input">
        <TextField required type="paswordt"   label="Password Confirm" variant="outlined" />
        </div>
        <div className="form-input">
        <TextField required type="text"   label="Full Name" variant="outlined" />
        </div>
        <div className="form-input">
        <TextField required type="file"  variant="outlined" />
        </div>

        <div className="form-input">
        <TextField required type="text"  id="outlined-basic" label="Biyografi" variant="outlined" />
        </div>
      <a href="/" className="auth-link ">
        Back to Login
      </a>
      <Button type="submit" variant="contained" color="success"> Register </Button>

     </form>
    </div>
  )
}

export default Register

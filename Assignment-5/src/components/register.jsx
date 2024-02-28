import React from "react";
import "./register.css"
function Register(){
    return(
        <body>
            {/* <h1>welcome to Registerpage</h1> */}
            <div class="form">
            <h2>Registration Form</h2>
            <form>
            <input type="text" id="username" name="username" placeholder="UserName" required/>
            <input type="text" id="firstname" name="firstname" placeholder="FirstName" required/>
            <input type="text" id="lastname" name="lastname" placeholder="LastName" required/>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob"/>
            <label for="gender">Gender:</label>
            <label>
                <input type="radio" name="gender" value="Male" checked/> Male
            </label>
                <label>
                    <input type="radio" name="gender" value="Female"/> Female
                </label>
                <input type="password" id="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                title="Must contain at least one number,  
            one uppercase and lowercase letter, and at least 6 characters" required/><br></br>
                <span id="passwordmsg" ></span><br></br>
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirmpassword" required oninput="passwordMatch()"/><br></br>
                <input type="checkbox" name="terms" value="agree" required/>I agree to the terms and conditions<br></br>
                <div class="btn-container">
                    <button type="submit" class="btn">Register</button><br></br>
                    <p>Alreday have an aacount?<a href="login.html">Login here</a>.</p>
                </div>
            </form>

            </div>
            
            
        </body>
    )
}
export default Register;
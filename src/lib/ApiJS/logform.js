export function validateForm(obj, err, pass2){  
    //collect form data in JavaScript variables  
    var pw = obj.password;    // Password string
    var cpw = pass2;   // Confirm password string 
    var fname = obj.firstname;     // First name string
    var lname = obj.lastname;     // Last name string
    var em = obj.email;      // email string
    var pnum = obj.phone;    // phone number string
    var uname = obj.username;    // username string   
    
    err.fname_err = '';
    err.name_err = '';
    err.em_err = '';
    err.uname_err = '';
    err.pw_err = '';
    err.cpw_err = '';

    /* First name*/
    // Check empty fields
    if (fname == '') {  
        err.fname_err = 'Please enter a first name.';  
    } 
    // Character data validation. 
    if(!isNaN(fname)){  
        err.fname_err = 'Please enter a valid name.';  
    }

    /* Last name*/
    // Check empty fields.
    if (lname == "") {  
        err.name_err = "Please enter a last name.";   
    } 
    // Character data validation.
    if(!isNaN(lname)){  
        err.name_err += "Please enter a valid name.";  
        return false;  
    }  
    
    /* Email */
    // Check empty fields.
    if (em == "") {  
        err.em_err = "Please enter an email address.";  
    } 
    // Format validation.
    if (!(em.indexOf('@') > -1)) {
        err.em_err = "Please enter a valid email address.";  
    }

    /* Username */
    // Check empty fields.
    if (uname == "") {  
        err.uname_err = "Please enter username.";  
    } 
    // Format validation.
    if (uname.length < 4) {
        err.uname_err = "The username you provided must have at least 4 characters.";  
    }

    //check empty password field  
    if(pw == "") {  
        err.pw_err = "Please enter password.";  
    }  
    
    //check empty confirm password field  
    if(cpw == "") {  
        err.cpw_err = "Please enter password.";  
    }   
     
    //minimum password length validation  
    if(pw.length < 8) {  
        err.pw_err = "The password you provided must have at least 8 characters.";   
    }  
    
    if(pw != cpw) {  
      err.cpw_err = "Passwords do not match.";  
    }
 }
export function validateForm(obj, pass2){  
    //collect form data in JavaScript variables  
    var pw = object.password;    // Password string
    var cpw = object.pass2;   // Confirm password string 
    var fname = object.firstname;     // First name string
    var lname = object.lastname;     // Last name string
    var em = object.email;      // email string
    var pnum = object.phone;    // phone number string
    var uname = object.username;    // username string   
    
    /* First name*/
    // Check empty fields
    if (fname == "") {  
      document.getElementById("blankMsg").innerHTML = "Please enter a first name.";  
      return false;  
    }
    //character data validation  
    if(!isNaN(fname)){  
      document.getElementById("blankMsg").innerHTML = "Please enter a valid name.";  
      return false;  
    }  


    /* Last name*/
    // Check empty fields.
    if (lname == "") {  
        document.getElementById("blankMsg").innerHTML = "Please enter a last name.";  
        return false;  
    } 
    // Character data validation.
    if(!isNaN(lname)){  
        document.getElementById("charMsg").innerHTML = "Please enter a valid name.";  
        return false;  
    }  
    
    /* Email */
    // Check empty fields.
    if (em == "") {  
        document.getElementById("blankMsg").innerHTML = "Please enter an email address.";  
        return false;  
    } 
    // Format validation

    //check empty password field  
    if(pw == "") {  
      document.getElementById("message1").innerHTML = "**Fill the password please!";  
      return false;  
    }  
    
    //check empty confirm password field  
    if(cpw == "") {  
      document.getElementById("message2").innerHTML = "**Enter the password please!";  
      return false;  
    }   
     
    //minimum password length validation  
    if(pw.length < 8) {  
      document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
      return false;  
    }  
    
    if(pw != cpw) {  
      document.getElementById("message2").innerHTML = "**Passwords are not same";  
      return false;  
    } else {  
      alert ("Your password created successfully");  
      document.write("JavaScript form has been submitted successfully");  
    }  
 }
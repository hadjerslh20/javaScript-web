// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print 'Welcome'.
// 3. If password is less than or equal to 8 print 'Password is too short'.
// 4. If password is greater than or equal to 8 print "Too Long Password an Password should be 8 characters".
// 8. If All fails print "Please Provide a password".

let password="hadjer12";
if(password.length ==8) {
    console.log("Welcome");
}else if(password.length <= 8) {
    console.log("Password is too short");
}else if (password.length >= 8) {
    console.log("Too Long Password an Password should be 8 characters");
}else {
    console.log("Please Provide a password");
}


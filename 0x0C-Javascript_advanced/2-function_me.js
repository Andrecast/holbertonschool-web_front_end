function welcomeMessage (fullName) {
    return function() {
        alert ("Welcome " + fullName);
    }
}

let guillaume = welcomeMessage("Guillaume"); /* guillaume, alex, fred se convierten en closures */
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
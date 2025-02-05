const form = document.querySelector("form");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");


function login() {

    const storedPassword = localStorage.getItem(email.value); // Use email.value

    if (!email.value) {
        alert("Please enter an email.");
    }
    else if (!storedPassword) {
        alert("Sorry! User does not exist.");

    }
    else if (storedPassword === pass.value) {
        window.location.href = "../index.html";
    } else {
        alert("Wrong password! Please enter a correct password.");
    }
    email.value = "";
    pass.value = "";
}

//submit btn click 
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    login();  
});


//For Enter Key Press
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        login();  
    }
})



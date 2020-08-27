const signupBtn = document.querySelector("#signupBtn");
const loginBtn = document.querySelector("#loginBtn");

function signUp() {
    // signupBtn.addEventListener('click', function() {
    var fullName = document.querySelector("#fullname");
    var signupEmail = document.querySelector("#signupEmail");
    var signupPassword = document.querySelector("#signupPassword");
    var confirmPassword = document.querySelector("#confirmPassword");
    if (confirmPassword.value !== signupPassword.value) {
        console.log("Passwords do not match");
        return false
    } else {

        fetch('https://wooden-mart.herokuapp.com/api/v1/user/signup', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": fullName.value,
                    "email": signupEmail.value,
                    "password": signupPassword.value,
                    "confirmPassword": confirmPassword.value
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // });

}

function login() {
    var loginEmail = document.querySelector("#loginEmail");
    var loginPassword = document.querySelector("#loginPassword");

    fetch('https://wooden-mart.herokuapp.com/api/v1/user/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": loginEmail.value,
                "password": loginPassword.value
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
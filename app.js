// Animated Login - Perfect JS

const container = document.getElementById('container');
const signUpBtn = document.getElementById('register');
const signInBtn = document.getElementById('login');

if (signUpBtn && signInBtn) {
    signUpBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    signInBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

function showSignUp() {
    container.classList.add("active");
}

function showSignIn() {
    container.classList.remove("active");
}

const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = signUpForm.querySelector('input[type="text"]').value.trim();
        const email = signUpForm.querySelector('input[type="email"]').value.trim();
        const password = signUpForm.querySelector('input[type="password"]').value.trim();

        if (!name || !email || !password) {
            alert("Please fill all fields!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Account created! Now Sign In.");
        container.classList.remove("active");
        signUpForm.reset();
    });
}

if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signInForm.querySelector('input[type="email"]').value.trim();
        const password = signInForm.querySelector('input[type="password"]').value.trim();

        if (!email || !password) {
            alert("Please enter email and password!");
            return;
        }

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            alert("No account found! Please Sign Up first.");
            container.classList.add("active");
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            alert(`Welcome back, ${savedUser.name}! Login Successful.`);
            signInForm.reset();
        } else {
            alert("Wrong email or password!");
        }
    });
}

window.addEventListener('load', () => {
    container.classList.remove("active");
});
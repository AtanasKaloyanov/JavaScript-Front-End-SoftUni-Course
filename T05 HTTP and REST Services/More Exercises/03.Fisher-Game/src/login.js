login();

function login() {
    let formElements = document.getElementById('login').children;
    let emailInput = formElements[0];
    let passwordInput = formElements[1];

    console.log(formElements);
    console.log(emailInput);
    console.log(passwordInput);
}

/*

<body>
    <header>
        <h1>Biggest Catch</h1>
        <nav>
            <a id="home" class="active" href="index.html">Home</a>
            <div id="user">
                <a id="logout" href="javascript:void(0)">Logout</a>
            </div>
            <div id="guest">
                <a id="login" href="login.html">Login</a>
                <a id="register" href="register.html">Register</a>
            </div>
            <p class="email">Welcome, <span>guest</span></p>
        </nav>
    </header>
    <main>
        <section id="login-view">
            <h2>Login</h2>
            <form id="login">
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <p class="notification"></p>
                <button>Login</button>
            </form>
        </section>
    </main>
</body>

*/
function login() {
    event.preventDefault()
    let username = document.getElementById('usname').value;
    let password = document.getElementById('pass').value;
    if (username == 'aliff13' && password == 'integrity') {
        window.open("http://127.0.0.1:5500/praktikum/javascript03/loginSuccess.html");
        window.location("loginSuccess.html");
    }
    else {
        alert('Username or Password is fault');
    }
}
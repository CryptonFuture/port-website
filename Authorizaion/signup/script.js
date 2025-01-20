const baseUrl = 'http://localhost:8000'


function showsnackbar(message, type = "success") {
    const snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.style.backgroundColor = type === "success" ? "#4caf50" : "#f44336";

    snackbar.className = "show";

    setTimeout(() => {
        snackbar.className = "hide";
        // window.location.href = '..//login.html'

        setTimeout(() => {
            snackbar.className = "";

        }, 500);
    }, 3000);

}

const register = async () => {
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPass = document.getElementById('confirmPass').value

    const formData = new FormData()

    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('confirmPass', confirmPass)

    const res = await fetch(`${baseUrl}/v1/api/auth/register`, {
        method: 'POST',
        body: formData
    })

    const data = await res.json()
    if (res.ok) {
        showsnackbar(data.message, "success");
        document.getElementById('firstname').value = ''
        document.getElementById('lastname').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('confirmPass').value = ''
        
    } else {
        showsnackbar(data.error, "error");


    }
}

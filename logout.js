document.getElementById('log').addEventListener('click', function () {
    document.getElementById('LOG').style.display = 'block';
});
document.getElementById('logout').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    alert("Logout succes fully");
    window.location.href = 'https://imamshaik786.github.io/deccancarelogin/'
});
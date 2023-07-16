document.getElementById('Mystaff').addEventListener('click', function () {
    document.getElementById('mystaff').style.display = 'block';
});
document.getElementById('stf').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    document.getElementById('mystaff').style.display = 'none';
    
});

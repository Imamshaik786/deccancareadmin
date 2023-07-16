document.getElementById('Myptnt').addEventListener('click', function () {
    document.getElementById('myptnt').style.display = 'block';
});
document.getElementById('mypt').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    document.getElementById('myptnt').style.display = 'none';
    
});

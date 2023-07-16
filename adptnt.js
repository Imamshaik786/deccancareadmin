
document.getElementById('myButton').addEventListener('click', function () {
    document.getElementById('myForm').style.display = 'block';
});

document.getElementById('submitbtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission

    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Print form details
    console.log('Name:', name)        ;
    console.log('Email:', email);

    // Reset the form after submission
    document.getElementById('name').value = '';
    document.getElementById('bldgrp').value = '';
    document.getElementById('phone').value='';
    document.getElementById('age').value='';
    document.getElementById('date').value='';
    document.getElementById('branch').value='';
    document.getElementById('myForm').style.display = 'none';
    alert("patient added successfully");
});

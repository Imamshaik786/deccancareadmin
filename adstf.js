
document.getElementById('MyButton').addEventListener('click', function () {
    document.getElementById('myform').style.display = 'block';
});

document.getElementById('SubmitBtn').addEventListener('click', function (event) {
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
    document.getElementById('myform').style.display = 'none';
    alert("staff added successfully");
});

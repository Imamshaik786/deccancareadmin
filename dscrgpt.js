
document.getElementById('mybutton').addEventListener('click', function () {
    document.getElementById('MyForm').style.display = 'block';
});

document.getElementById('Submitbtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission

    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Print form details
    console.log('Name:', name)        ;
    console.log('Email:', email);

    // Reset the form after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value='';
    document.getElementById('reason').value='';
    document.getElementById('age').value='';
    document.getElementById('date').value='';
    document.getElementById('MyForm').style.display = 'none';
    alert("OK NOW PATIENT CAN DISCHARGE ");
});

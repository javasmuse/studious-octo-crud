// get the input from the form when the submit button gets pushed

const myForm = document.getElementById("my-form");

myForm.onsubmit = (event) => {
    event.preventDefault();

    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    console.log({
        fName,
        lName,
        email,
        role
    });


};
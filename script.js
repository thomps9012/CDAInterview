$(document).ready(function () {
    $('.btn').on('click', function(event){ 
    const email = $('#email').val();
    const name = $('#name').val();
    const message = $('#message').val();


    function setEmail() {
        localStorage.setItem("email: ", email);
    };
    function setName() {
        localStorage.setItem("name: ", name);
    };
    function setMessage() {
        localStorage.setItem("message: ", message);
    };
        console.log(email);
        console.log(name);
        console.log(message);
        event.preventDefault();
        setEmail();
        setName();
        setMessage();
    });
});
$(document).ready(function () {
    var email = $('#email').val();
    // document.getElementById("email");
    var name = $('#name').val();
    // document.getElementById("name");
    var message = $('#message').val();
    // document.getElementById("message");

    function setEmail(){
        localStorage.setItem("email: ", email);
    };
    function setName(){
        localStorage.setItem("name: ", name);
    };
    function setMessage(){
        localStorage.setItem("message: ", message);
    };
    $(".submit").on("click", function(event){
        event.preventDefault();
        setEmail();
        setName();
        setMessage();
    });
});
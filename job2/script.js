

// var a = document.getElementById("firstname").value.trim();
// var b = document.getElementById("lastname").value.trim();
// var c = document.getElementById("phone").value.trim();
// var d = document.getElementById("email").value.trim();
// var e = document.getElementById("username").value.trim();
// var f = document.getElementById("password").value.trim();
// var g = document.getElementById("checkbox");


// function test() {

// if( a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g.checked){
//     window.alert("invalid input");

// }else{
//     window.alert("sucess input");
// }

// }
        document.getElementById('date').innerHTML = new Date().toLocaleDateString();
        document.getElementById('time').innerHTML = new Date().toLocaleDateString();
        setInterval(() => document.getElementById('time').innerHTML = new Date().toLocaleTimeString());

function test(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values inside the function
    var a = document.getElementById("firstname").value.trim();
    var b = document.getElementById("lastname").value.trim();
    var c = document.getElementById("phone").value.trim();
    var d = document.getElementById("email").value.trim();
    var e = document.querySelector("[placeholder='Username']").value.trim(); // for username input
    var f = document.getElementById("password").value.trim();
    var g = document.getElementById("checkbox");

    // Validation logic
    if (a === "" || b === "" || c === "" || d === "" || e === "" || f === "" || !g.checked) {
        window.alert("Invalid input");
    } else {
        window.alert("Success input");
    }
}


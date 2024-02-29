
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
}


function loginUser(){
    var storedNameCookie = getCookie('name');
    var storedPwCookie = getCookie('pw');

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('uname');
    var userPw = document.getElementById('psw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw || 
        (userName.value == storedNameCookie && userPw.value == storedPwCookie)){
        alert('You are logged in.');
    }else{
        alert('Error on login');
        event.preventDefault(); // Prevent default action (form submission or link navigation)
    }
}

    function signUpUser() {
        var name = document.getElementById('name');
        var lastName = document.getElementById('signup-lastName');
        var username = document.getElementById('signup-username');
        var pw = document.getElementById('pw');
        var lowerCaseLetters = /[a-z]/g;
       var upperCaseLetters = /[A-Z]/g;
       var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in name');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in name and password');

    }else if(pw.value.length < 8){
        alert('Min of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        // to define cookies that they expire at the end of the day
         var endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999); // end of the day 
        var millisecondsUntilEndOfDay = endOfDay.getTime() - new Date().getTime();
        setCookie('name', name.value, millisecondsUntilEndOfDay);
        setCookie('pw', pw.value, millisecondsUntilEndOfDay);

        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
      
}



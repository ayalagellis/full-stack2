function loginUser(){
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('psw');

    var userName = document.getElementById('uname');
    var userPw = document.getElementById('psw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}

    function signUpUser() {
        var name = document.getElementById('signup-name');
        var lastName = document.getElementById('signup-lastName');
        var username = document.getElementById('signup-username');
        var pw = document.getElementById('signup-psw');
        var confirmPw = document.getElementById('confirm-psw');
        var lowerCaseLetters = /[a-z]/g;
       var upperCaseLetters = /[A-Z]/g;
       var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('uname', name.value);
        localStorage.setItem('psw', pw.value);
        alert('Your account has been created');
    }

    function loginFunc() {
        window.location.href = "/HTML/games.html";
      }
      
}

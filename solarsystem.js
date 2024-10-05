function changecolor1(){
    const button = document.getElementsByClassName("button");
    button[0].style.backgroundColor="black";
}
function changecolor2(){
    const button = document.getElementsByClassName("button");
    button[1].style.backgroundColor="black";
}
function changecolor3(){
    const button = document.getElementsByClassName("button");
    button[2].style.backgroundColor="black";
}
function changecolor4(){
    const button = document.getElementsByClassName("button");
    button[3].style.backgroundColor="black";
}
function changecolor5(){
    const button = document.getElementsByClassName("button");
    button[4].style.backgroundColor="black";
}
function changecolor6(){
    const button = document.getElementsByClassName("button");
    button[5].style.backgroundColor="black";
}
function changecolor7(){
    const button = document.getElementsByClassName("button");
    button[6].style.backgroundColor="black";
}
function changecolor8(){
    const button = document.getElementsByClassName("button");
    button[7].style.backgroundColor="black";
}
function changecolor9(){
    const button = document.getElementsByClassName("button");
    button[8].style.backgroundColor="black";
}
function valid(){
    var name = String(document.getElementById("name").value);
    var date = String(document.getElementById("date").value);
    var gender = String(document.getElementById("gender").value);
    var tel = Number(document.getElementById("tel").value);
    var email = String(document.getElementById("email").value);
    var password = Number(document.getElementById("password").value);
    var retype = Number(document.getElementById("retype").value);
    var leng = password.length;
    if(name == '' || date == '' || gender == '' || tel == '' || email == '' || password == '' || retype == ''){
        alert("Enter all the fields");
        return False;
    }
    else if(password != retype){
        alert("confirm your password again");
        return False;
    }
    else if(leng < 8){
        alert("your password must be atleast 8 characters,Try Again");
        return False;
    }
    else if(isNaN(tel)){
        alert("Enter digits only");
        return False;
    }
    else{
        alert("ENTER TO THE OUTER SPACE");
    }
}

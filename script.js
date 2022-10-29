

// function showSignup(){
//     document.getElementById("sign").style.display = "fixed";
//     document.getElementById("log").style.display = "none";
//     // document.getElementById("signUpBtn").style.borderBottom = "rgba(10, 136, 43, 0.5)";
//     // document.getElementById("logInBtn").style.borderBottom = "red";
// }
// function showLogin(){
//     document.getElementById("sign").style.display = "none";
//     document.getElementById("log").style.display = "fixed";
// //     document.getElementById("signUpBtn").style.borderBottom = "red";
// //     document.getElementById("logInBtn").style.borderBottom = "rgba(10, 136, 43, 0.5)";
// // }

// }


// const signUpButton = document.getElementById('signUpBtn');
//     const signInButton = document.getElementById('logInBtn');
//     const container = document.getElementById('container');

//     signUpButton.addEventListener('click', () => {
//         container.classList.add("right-panel-active");
//     });
//     signInButton.addEventListener('click', () => {
//         container.classList.remove("right-panel-active");
//     });

// function toggleSignup(){
//     // document.getElementsByClassName("logInBtn").style.backgroundColor="#fff";
//     //  document.getElementsByClassName("logInBtn").style.color="#222";
//      document.getElementsByClassName("signUpBtn").style.borderColor = "red"
//     //  document.getElementsByClassName("signUpBtn").style.color="#fff";
//      document.getElementById("log").style.display="none";
//      document.getElementById("log").style.display="block";
//  }
 
//  function toggleLogin(){
//      document.getElementById("logInBtn").style.borderColor = "red"
//     //  document.getElementById("logInBtn").style.color="#fff";
//     //  document.getElementsByClassName("signUpBtn").style.backgroundColor="#fff";
//     //  document.getElementsByClassName("signUpBtn").style.color="#222";
//      document.getElementById("log").style.display="none";
//      document.getElementById("log").style.display="block";
//  }
 /* Show login form on button click */
 
// $('.loginBtn').click(function(){
//     $('.login').show();
//     $('.signUp').hide();
//     /* border bottom on button click */
//     $('.loginBtn').css({'border-bottom' : '2px solid #ff4141'});
//     /* remove border after click */
//     $('.signUpBtn').css({'border-style' : 'none'});
//   });
   
   
//   /* Show sign Up form on button click */
   
//   $('.signUpBtn').click(function(){
//     $('.login').hide();
//     $('.signUp').show();
//     /* border bottom on button click */
//     $('.signUpBtn').css({'border-bottom' : '2px solid #ff4141'});
//      /* remove border after click */
//      $('.loginBtn').css({'border-style' : 'none'});



var div1 = document.getElementById("div1")
var div2 = div1.getElementsByClassName("form")[0]
var div3 = div2.getElementsByClassName("btn")[0]
var btn1  = div3.getElementsByClassName("signUpBtn")[0]
var btn2 = div3.getElementsByClassName("loginBtn")[0]

btn1.addEventListener("click",function(){
    document.forms[1].style.visibility = 'hidden';
    document.forms[1].style.display = 'none';
    document.forms[0].style.display = 'block';
    document.forms[0].style.visibility = 'visible';

    btn1.style.borderBottom = '2px solid #ff4141';
    btn2.style.borderBottom='none';
})


btn2.addEventListener("click",function(){
    document.forms[0].style.visibility = 'hidden';
    document.forms[0].style.display = 'none';
    document.forms[1].style.display = 'block';
    document.forms[1].style.visibility = 'visible';
    
    btn2.style.borderBottom = '2px solid #ff4141';
    btn1.style.borderBottom='none';
})



//   });


  
    // var butt = document.getElementsByClassName("loginBtn")[0]

    // butt.addEventListener("click",function(){
    //     // document.getElementsByClassName("login").style.display = '';
    //     document.getElementsByClassName("login")[0].hidden=true;
    //     document.getElementsByClassName("signUp")[0].hidden=false;
    //     // document.getElementsByClassName("loginBtn").style.borderBottomWidth = "10px";
    //     // document.getElementsByClassName("signUpBtn").style.border= 'none';

    // })

    // var signn = document.getElementsByClassName("signUpBtn")[0]

    // signn.addEventListener("click",function(){
    //     document.getElementsByClassName("login")[0].hidden=false;
        
    //     document.getElementsByClassName("signUp")[0].hidden=true;
    // })

////////validaTION
function NameValidation(fullName){
    var regex = /^[a-z]{3,}\s[a-z]{3,}$/i;
    if(regex.test(fullName))
        return true; 
    var error = TypeError("Name was not in the correct format");
    throw error;
}

function EmailValidation(email){
    var regex = /^[a-z0-9\.\_]{3,}\@[a-z]{3,}(.com|.org|.net)$/i;
    if(regex.test(email))
        return true; 
    var error = TypeError("Email was not in the correct format");
    throw error;
}

function PasswordValidation(password){
    var regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,15})/;
    if(regex.test(password))
        return true; 
    var error = TypeError("Password was not in the correct format");
    throw error;
}

// function PhoneValidation(phone){
//     var regex = /^(01)(0|1|2|5)[0-9]{8}$/;
//     if(regex.test(phone))
//         return true; 
//     var error = TypeError("Phone was not in the correct format");
//     throw error;
// }
  



/////////REGISTERATION

document.forms[0].elements["userName"].onblur = function(){
    try{
        NameValidation(this.value);
        this.parentNode.nextElementSibling.innerText = "";
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }catch(e){
        this.parentNode.nextElementSibling.innerText = e.message;
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    }
}

document.forms[0].elements["Email"].onblur = function(){
    try{
        EmailValidation(this.value);
        this.parentNode.nextElementSibling.innerText = "";
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }catch(e){
        this.parentNode.nextElementSibling.innerText = e.message;
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    }
}

document.forms[0].elements["password"].onblur = function(){
    try{
        PasswordValidation(this.value);
        this.parentNode.nextElementSibling.innerText = "";
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }catch(e){
        this.parentNode.nextElementSibling.innerText = e.message;
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    }
}

// document.forms[0].elements["Phone"].onblur = function(){
//     try{
//         PhoneValidation(this.value);
//         this.nextElementSibling.innerText = "";
//         this.classList.remove("is-invalid");
//         this.classList.add("is-valid");
//     }catch(e){
//         this.nextElementSibling.innerText = e.message;
//         this.classList.add("is-invalid");
//         this.classList.remove("is-valid");
//     }
// }

// document.getElementById("eye").onclick = function(){
//     var passwordInput = document.forms[0].elements["Password"];
//     if(passwordInput.type == "password"){
//         passwordInput.type = "text";
//         this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
//             <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
//             <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
//             <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
//         </svg>`;
//     }
//     else{ //passwordInput.type == "text"
//         passwordInput.type = "password";
//         this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
//             <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
//             <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
//         </svg>`;
//     }
// }

document.forms[0].onsubmit = function(e){
    var fullname = this.elements["userName"].value;
    var password = this.elements["Password"].value;
    var email = this.elements["Email"].value;
    //var phone = this.elements["Phone"].value;

    try{
        NameValidation(fullname);
        PasswordValidation(password);
        EmailValidation(email);
       // PhoneValidation(phone);

        var Exp = new Date();
        Exp.setDate(Exp.getDate()+1);
        CreateCookie("userName",fullname,Exp);
        CreateCookie("Email",email,Exp);
    }catch{
        e.preventDefault();
        alert("Please fill correct data");
    }
}

try{
    if(GetCookie("userName") && GetCookie("Email")){
        location.replace("./Home.html");
    }
}catch{

}


///////////////lOGiN

document.forms[1].elements["EmailLogin"].onblur = function(){
    try{
        EmailValidation(this.value);
        this.parentNode.nextElementSibling.innerText = "";
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    } 
   catch (err){
        this.parentNode.nextElementSibling.innerText = err.message;
     
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    }
}

document.forms[1].elements["passwordLogin"].onblur = function(){
    try{
        PasswordValidation(this.value);
        this.parentNode.nextElementSibling.innerText = "";
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }catch(e){
        this.parentNode.nextElementSibling.innerText = e.message;
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    }
}

document.forms[1].onsubmit = function(e){
    //debugger;
    e.preventDefault();
    var password = this.elements["passwordLogin"].value;
    var email = this.elements["EmailLogin"].value;

    try{
        PasswordValidation(password);
        EmailValidation(email);

        //validate user exists
        var XHR = new XMLHttpRequest();
        XHR.open("get","./Data/Users.json",false);
        XHR.onreadystatechange = function(){
            var found = false;
            var user = {};
            if(XHR.readyState == 4 && XHR.status == 200){
                var Data = JSON.parse(XHR.responseText);
                for(item of Data){
                    if(item.email == email && item.password == password){
                        found = true;
                        user = item;
                    }
                }
            }

            if(found){
                var Exp = new Date();
                Exp.setDate(Exp.getDate()+1);
                CreateCookie("userName",user.username,Exp);
                CreateCookie("Email",user.email,Exp);
                document.forms[1].submit();
            }
            else{
                //e.preventDefault();
                alert("User not found");
            }
        }
        XHR.send();

    }catch{
        //e.preventDefault();
        alert("Please fill correct data");
    }
}

try{
    if(GetCookie("userName") && GetCookie("Email")){
        location.replace("./Home.html");
    }
}catch{

}


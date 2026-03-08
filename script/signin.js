console.log("file connected")

function signIn(){
    const username=document.getElementById("username").valuetrim();
    const password=document.getElementById("password").valuetrim();
    
    if(username==='admin'&& password==='admin123'){
        alert("sign in successful");
        window.location.assign("/home.html");
    }
    else{
        alert("Sign in failed");
    }
}

signIn();
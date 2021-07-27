const ACCOUNTMAP = new Map;

function checkLogin(){
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    if (ACCOUNTMAP.has(user)){
        var passToCheck = ACCOUNTMAP.get(user);
        if (passToCheck != null){
            if (pass === passToCheck) {
                alert("You logged in!!");
                return true;
            }
        }
    }
    alert("Login failed!!");
    return false;
}

function addAccount(){
    var username = document.getElementById("name");
    var password = document.getElementById("pass");
    if (!ACCOUNTMAP.has(username)){
        ACCOUNTMAP.set(username, password);
        return true;
    }
    alert("Username already exists, sorry")
    return false;
}
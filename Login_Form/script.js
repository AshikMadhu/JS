function passvalidate() {
    let p = document.getElementById("password").value;

    if (p.length >= 6) 
        return true;

    alert("Password must contain at least 6 characters");
    return false;
}
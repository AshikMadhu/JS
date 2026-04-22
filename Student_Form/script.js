function valemail(){
    let email=document.getElementById("email").value;
    if (email.includes("@"))
        return true
    alert("Invalid email")
}
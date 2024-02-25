let flag=false;
const burgerMenu=document.getElementById("burgerMenu");
document.addEventListener("DOMContentLoaded",()=>{
    const navLinks=document.getElementById("navLinks");
    burgerMenu.addEventListener("click",()=>{
        navLinks.classList.toggle("show");
        flag=!flag;
        if(flag){
            burgerMenu.innerHTML="&#10060;";
        }
        else{
            burgerMenu.innerHTML="&#9776;";
        }
    })
})



function submitform(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;
    let selectevent = document.getElementById("selectevent").value;
    let date = document.getElementById("date1").value;


    if (username.trim() === "") {
        alert("Please enter your name");
        return;
    } else if (!isValidusername(username)) {
        alert("Please enter a valid Username");
        return;
    }


    if (phonenumber.trim() === "") {
        alert("Please enter your contact number");
        return;
    } else if (!isValidContact(phonenumber)) {
        alert("Please enter a valid 10-digit contact number");
        return;
    }


    if (email.trim() === "") {
        alert("Please enter your email address");
        return;
    }

    if (!selectevent || !date) {
        alert("Enter required fields")
        return
    }


    var details = `Username : ${username} \n Phone number : ${phonenumber} \n Email : ${email} \n Select Event : ${selectevent} \n Date : ${date}`;
    alert(details)
    document.getElementById('loginform').reset();

}


function isValidusername(username) {
    var userRegex = /^[a-zA-Z]{3,15}$/;
    return userRegex.test(username);
}
function isValidContact(phonenumber) {
    var contactRegex = /^\d{10}$/;
    return contactRegex.test(phonenumber);
}





















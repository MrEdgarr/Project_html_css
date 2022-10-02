function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name == "" && email == "" && phone == "") {
        // alert("Vui lòng nhập day du thong tin!");
        err = document.getElementById("err").innerHTML = "Name can't be blank";
        // return false;
    } else if (email.indexOf("@") < 1 || email.lastIndexOf(".") < (email.indexOf("@") + 2) || (email.lastIndexOf(".") + 2) >= email.length) {
        err = document.getElementById("err").innerHTML = "Please enter a valid e-mail address.";
    }
    else if (isNaN(phone) || phone == "") {
        err = document.getElementById("err").innerHTML = "Please enter valid phone.";
    } else {
        alert("Your request has been sent successfully")
        return true;
    }
    return false;
}
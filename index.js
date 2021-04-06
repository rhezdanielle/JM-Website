function validate(){
    var name = document.getElementById("contact-name");
    var email = document.getElementById("contact-email");
    var subject = document.getElementById("contact-subject");
    var message = document.getElementById("contact-message");
    var error = document.getElementById("contact-error");

    var text;
    if(name.lenght < 5){
        text = "Enter a valid Name";
        error.innerHTML = text;
        return false;
    }
    if(subject.lenght < 5){
        text = "Enter the message subject"
        error.innerHTML = text;
        return false;
    }
    
}
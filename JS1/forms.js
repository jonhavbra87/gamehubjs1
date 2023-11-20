//GETTING ALL INPUT TEXT OBJECTS
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const phonenumber = document.getElementById("phone");
const email = document.getElementById("email");
const adress = document.getElementById("adress");
const zipcode = document.getElementById("zipcode");
const town = document.getElementById("town");
const country = document.getElementById("country");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.alue.trim();
    const phonenumberValue = phonenumber.value.trim();
    const emailValue = email.value.trim();
    const adressValue = adaress.value.trim();
    const zipcodeValue = zipcode.value.trim();
    const townValue = town.value.trim();
    const countryValue = country.value.trim();

if(firstnameValue === "") {
        setError(firstname, "Firstname is required")
    } else {
        setSuccess(firstname);
    }

};


/*const firstname = document.forms["vform"]["firstname"];
const surname = document.forms["vform"]["surname"];
const phonenumber = document.forms["vform"]["phonenumber"];
const email = document.forms["vform"]["email"];
const adress = document.forms["vform"]["adress"];
const zipcode = document.forms["vform"]["zipcode"];
const town = document.forms["vform"]["town"];
const country = document.forms["vform"]["country"];

//GETTING ALL ERRO DISPLAY OBJECTS
const name_error = document.getElementById("name_error");
const phone_error = document.getElementById("phone_error");
const email_error = document.getElementById("email_error");
const adress_error = document.getElementById("adress_error");
const zipcode_error = document.getElementById("zipcode_error");
const town_error = document.getElementById("town_error");
const country_error = document.getElementById("country_error");

//SETTING ALL EVENT LISTENERS
firstname.addEventListener("blur", nameVerify, true);
surname.addEventListener("blur", nameVerify, true);
phonenumber.addEventListener("blur", phoneVerify, true);
email.addEventListener("blur", emailVerify, true);

//Validation function
export function Validate() {
    if (firstname.value == "") {
        firstname.style.border = "1px solid red";
        name_error.textContent = "First name is required";
        firstname.focus();
        return false;
    }
    if (Surname.value == "") {
        Surname.style.border = "1px solid red";
        name_error.textContent = "Surname is required";
        Surname.focus();
        return false;
    }
    if (email.value == "") {
        email.style.border = "1px solid red";
        name_error.textContent = "E-mail is required";
        email.focus();
        return false;
    }
}
//event handler functions
export function nameVerify(){
    if (firstname.value != "") {
        firstname.style.border = "  border: 1px solid #5E6E66)";
        firstname.innerHTML ="";
    }
} */
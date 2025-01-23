//Setting field to check whether the input filled Correctle OR not
var namecheck = false
var phonecheck =false
var emailcheck =false
var passwordcheck =false
var confirmpasswordcheck =false

//Container
var usernameContainer = document.querySelector(".username")
var phoneContainer = document.querySelector(".phone")
var emailContainer = document.querySelector(".email")
var passwordContainer = document.querySelector(".password")
var confirmpasswordContainer = document.querySelector(".confirmpassword")

//Selecting Icons
var usernameIcon = usernameContainer.querySelector("i")
var phoneIcon = phoneContainer.querySelector("i")
var emailIcon = emailContainer.querySelector("i")
var passwordIcon = passwordContainer.querySelector("i")
var confirmpasswordIcon = confirmpasswordContainer.querySelector("i")

//Selecting Labels
var usernameLabel = usernameContainer.querySelector("label")
var phoneLabel = phoneContainer.querySelector("label")
var emailLabel = emailContainer.querySelector("label")
var passwordLabel = passwordContainer.querySelector("label")
var confirmpasswordLabel = confirmpasswordContainer.querySelector("label")

//Selecting Inputbox
var usernameInput = document.getElementById("username")
var phoneInput = document.getElementById("phone")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var confirmpasswordInput = document.getElementById("confirmpassword")

usernameInput.addEventListener("keyup",function(){
    //User Input value

    var enteredValue = usernameInput.value
    if(enteredValue=="")
    {
        //Show Label and Hide Icon

        usernameLabel.style.visibility="visible"
        usernameIcon.style.visibility="hidden"
        namecheck = false
    }
    else
    {
        //Show Icon and Hide Label

        usernameIcon.style.visibility="visible"
        usernameLabel.style.visibility="hidden"
        namecheck = true
    }
})

//Phone Input
phoneInput.addEventListener("keyup",function(){
    //User Input value

    var enteredValue = phoneInput.value
    if(enteredValue=="")
    {
        //Show Label and Hide Icon

        phoneLabel.style.visibility="visible"
        phoneIcon.style.visibility="hidden"
        phoneLabel.textContent = "Please enter the 10 digit Mobile Number"
        phonecheck = false
    }
    else if(enteredValue.length < 10)
    {
        //Show Label and Hide Icon

        phoneLabel.style.visibility="visible"
        phoneIcon.style.visibility="hidden"
        phoneLabel.textContent = "Please enter the 10 digit Mobile Number"
        phonecheck = false
    }
    else
    {
        //Show Icon and Hide Label

        phoneIcon.style.visibility="visible"
        phoneLabel.style.visibility="hidden"
        phonecheck = true
    }
})
//email input

emailInput.addEventListener("keyup",function(){
    //User Input value

    var enteredValue = emailInput.value
    if(enteredValue=="")
    {
        //Show Label and Hide Icon

        emailLabel.style.visibility="visible"
        emailIcon.style.visibility="hidden"
        emailcheck = false
    }
    else
    {
        //Show Icon and Hide Label

        emailIcon.style.visibility="visible"
        emailLabel.style.visibility="hidden"
        emailcheck = true
    }
})
//password input

passwordInput.addEventListener("keyup",function(){
    //User Input value

    var enteredValue = passwordInput.value
    if(enteredValue=="")
    {
        //Show Label and Hide Icon

        passwordLabel.style.visibility="visible"
        passwordIcon.style.visibility="hidden"
        passwordcheck = false
    }
    else
    {
        //Show Icon and Hide Label

        passwordIcon.style.visibility="visible"
        passwordLabel.style.visibility="hidden"
        passwordcheck = true
    }
})
//confirm password input

confirmpasswordInput.addEventListener("keyup",function(){
    //User Input value

    var enteredValue = confirmpasswordInput.value
    if(enteredValue=="")
    {
        //Show Label and Hide Icon

        confirmpasswordLabel.style.visibility="visible"
        confirmpasswordIcon.style.visibility="hidden"
        confirmpasswordcheck = false
    }
    else
    {
        //Show Icon and Hide Label

        confirmpasswordIcon.style.visibility="visible"
        confirmpasswordLabel.style.visibility="hidden"
        confirmpasswordcheck = true
    }
})
//Selecting Submit and popup Button

var submitbutton = document.getElementById("submitbutton")
var popup = document.querySelector(".popup")
submitbutton.addEventListener("click",function(a)
{
    //Preventing Default Refresh

    a.preventDefault()
    if(namecheck == true && phonecheck == true && emailcheck == true && passwordcheck == true && confirmpasswordcheck == true)
    {
        popup.textContent = "Form Submitted Successfully"
        popup.style.backgroundColor ="blue"
        popup.style.top = "10px"
        popup.style.opacity = "1"
    }
    else
    {
        popup.textContent = "Please Fill the Form"
        popup.style.backgroundColor ="red"
        popup.style.color = "white"
        popup.style.top = "10px"
        popup.style.opacity = "1"
    }
    //Run this line after 3 seconds
    //Set timeout(What should happens ,after how many milliseconds)

    setTimeout(
        function()
        { 
            popup.style.top = "-40px"
            popup.style.opacity = "0"
        },2000)    
})
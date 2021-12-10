"use strict";
function saveForm() {
    var genderRes;
    if(document.getElementById('male').checked){
        genderRes = document.getElementById('male').value;
    } else if(document.getElementById('female').checked){
        genderRes = document.getElementById('female').value;
    } else if(document.getElementById('others').checked){
        genderRes = document.getElementById('others').value;
    }
    alert("First name: " + document.getElementById("first-name").value +
    "\nLast name: " + document.getElementById("last-name").value +
    "\nAge: " + document.getElementById("age").value +
    "\nGender: " + genderRes +
    "\nAddress: " + document.getElementById('address').value);
}
    // +
    // "\nPrimary Level: " + document.getElementById('primary').value + ", " + document.getElementById('primary-award').value + 
    // "\nSecondary Level: " + document.getElementById('secondary').value + ", " + document.getElementById("secondary-award").value + 
    // "\nTertiary Level: " + document.getElementById("tertiary").value + ", " + document.getElementById("tertiary-award").value
var regexForText=/^[a-z A-Z]+$/;
var regexForEmail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
var menu = document.querySelector('.primary-navbar');
var burger = document.querySelector('.burger');
var firstName = document.querySelector('.firstname');
var lastName = document.querySelector('.lastname');
var position = document.querySelector('.position');
var company = document.querySelector('.company');
var companyType = document.querySelector('.company-type');
var countries = document.querySelector('.countries');
var workEmail = document.querySelector('.work-email');
var checkBox = document.querySelectorAll('input[type="checkbox"]');
var submit = document.querySelectorAll('.submit');
var flag = true;

burger.addEventListener('click', function(){ 
  //Toggle nav
  burger.classList.toggle('navtoggle');
  menu.classList.toggle('hide-menu');
});


submit[1].addEventListener('click', function(e){
  e.preventDefault();
  flag = checkfields();
  if (flag) {
    addToTable();
  }
});


function checkfields() {
  if (firstName.value == null || firstName.value == '') { // check first name is not empty
    alert("Please Enter Your First Name"); 
    flag = false;
  }else if (!firstName.value.match(regexForText)) { //check letters in first name
    alert("Please Use Letters In First Name.");
  }else if (lastName.value == null || lastName.value == '') { // check last name is not empty
    flag = false;
    alert("Please Enter Your Last Name");
  }else if (!lastName.value.match(regexForText)) { //check letters in last name
    alert("Please Use Letters In Last Name.");
  }else if (position.value == null || position.value == '') { // check position name is not empty
    flag = false;
    alert("Please Enter Your Position");
  }else if (!position.value.match(regexForText)) { //check letters in position
    alert("Please Use Letters In Position.");
  }else if (company.value == null || company.value == '') {
    flag = false;
    alert("Please Enter Your Company Name");
  }else if (companyType.value === "none") {
    flag = false;
    alert("Please Select Your Company Type");
  }else if (countries.value === "none") {
    flag = false;
    alert("Please Select Your Country");
  }else if (workEmail.value == null || workEmail.value == '') {
    flag = false;
    alert("Please Enter Your Email Address");
  }else if (!workEmail.value.match(regexForEmail)) { //check letters in position
    alert("Please match the format requested.");
  }else if (checkBox[0].checked === false && checkBox[1].checked === false) {
    flag = false;
    alert("Please Select Either Yes or No");
  }else { 
    return flag; 
  }
}
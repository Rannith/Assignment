const step = document.querySelectorAll('.container');
let previousButton = document.querySelectorAll('.btn-previous');
console.log(step);

var tab = 0;
previousButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        tab--;
        console.log("tabs :"+tab)
        changeForm();
    });
}); 

function changeForm() {
    step.forEach(formStep => {
        formStep.classList.contains("active") &&
            formStep.classList.remove("active");
    })

    step[tab].classList.add("active");
}

function validateBasicForm() {
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validateName();

    let valid = true;

    const inputs = [...step[tab].querySelectorAll(".input-box")];
    inputs.forEach(element => {
        if(element.classList.contains("error")){
            console.log("in validate checker ");
            valid = false
        }
    })
        
    if(valid){
        tab++;
        changeForm();
    }
}

function validateOtherForm() {
    validateDob();
    validateGender();
    validateState();
    validatePhoneNumber();

    let valid = true;

    const inputs = [...step[tab].querySelectorAll(".input-box")];
    inputs.forEach(element => {
        if(element.classList.contains("error")){
            console.log("in validate checker ");
            valid = false
        }
    })
        
    if(valid){
        tab++;
        changeForm();
    }
}

function validateWorkInformation() {
    tab++;
    changeForm();
}

function validateEducationInformation() {
    validateEducation();
    validatePassingYear();

    let valid = true;

    const inputs = [...step[tab].querySelectorAll(".input-box")];
    inputs.forEach(element => {
        if(element.classList.contains("error")){
            console.log("in validate checker ");
            valid = false
        }
    })
        
    if(valid){
        tab++;
        changeForm();
    }
}

function validationTeamInformation() {
    validateDepartment();
    validateCheckBox();

    let valid = true;

    const inputs = [...step[tab].querySelectorAll(".input-box")];
    inputs.forEach(element => {
        if(element.classList.contains("error")){
            console.log("in validate checker ");
            valid = false
        }
    })
        
    if(valid){
        tab++;
        changeForm();
    }
}

function validateEmail() {
    const userInput = document.getElementById('email');
    
    const regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    
    if(!regex.test(userInput.value)){
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = 'Enter valid Email and cannot be empty';
        //add error border
        userInput.classList.add('error');
        valid = false;
        console.log('Enter valid Email and cannot be empty')
    }
    else{
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = '';
        //remove error border
        userInput.classList.remove('error');
        valid = true;
        console.log('ok')
    }
}

function validatePassword() {
    const userInput = document.getElementById('password');
    
    let len = userInput.value.length;
    
    if(len<=0){
        const errorMsg = document.getElementById('passwordError');
        errorMsg.innerHTML = 'Password field cannot be empty!!';
        //add error border
        userInput.classList.add('error');
        valid = false;
        console.log('Password field cannot be empty')
    }
    else{
        if(len<=7) {
            const errorMsg = document.getElementById('passwordError');
            errorMsg.innerHTML = 'Password must be grater than 7 characters';
            //add error border
            userInput.classList.add('error');
            valid = false;
        }
        else{
            const errorMsg = document.getElementById('passwordError');
            errorMsg.innerHTML = '';
            //remove error border
            userInput.classList.remove('error');
            valid = true;
            console.log('ok')
        }
    }
}

function validateConfirmPassword() {
    const userInput = document.getElementById('confirm-password');

    let len = userInput.value.length;

    if(len <= 0){
        const errorMsg = document.getElementById('confirmPasswordError');
        errorMsg.innerHTML = 'Confirm Password field cannot be empty!!';
        //add error border
        userInput.classList.add('error');
        valid = false;
        console.log('Password field cannot be empty')
    }
    else{
        const password = document.getElementById('password');

        if(userInput.value !== password.value){
            const errorMsg = document.getElementById('confirmPasswordError');
            errorMsg.innerHTML = 'Password and confirm password must be same';
            //add error border
            userInput.classList.add('error');
            valid = false;
            console.log('Password and confirm password must be same');
        }
        else{
            const errorMsg = document.getElementById('confirmPasswordError');
            errorMsg.innerHTML = '';
            //remove error border
            userInput.classList.remove('error');
            valid = true;
            console.log('ok')
        }
    }
}

function validateName() {
    const name = document.getElementById('first-name');
    
    const regex = /^[a-zA-Z]{2,15}$/;
    
    if(!regex.test(name.value)){
    //alert("name contain letters only between 2 to 15 characters");
        const errorMsg = document.getElementById('firstNameError');
        errorMsg.innerHTML = 'name contain letters only between 2 to 15 characters';
        //add error border
        name.classList.add('error');
        valid = false;
        console.log('name not ok')
    }
    else{
        const errorMsg = document.getElementById('firstNameError');
        errorMsg.innerHTML = '';
        //remove error border
        name.classList.remove('error');
        valid = true;
        console.log('ok')
    }
}

function validateDob() {
    const userInput = document.getElementById('date-birth');
            
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

    const extractBirth = userInput.value.split('/')
    const current = new Date();
    const yyyy = current.getFullYear();
    let mm = current.getMonth() + 1;
    let dd = current.getDate();
    if (dd < 10) 
    dd = '0' + dd;
    if (mm < 10) 
    mm = '0' + mm;
    let currentDate = dd+"/"+mm+"/"+yyyy
    let extractCurrent = currentDate.split('/')
    let age = extractCurrent[2] - extractBirth[2]
    if(userInput.value == "") {
        const errorMsg = document.getElementById('dobError');
        errorMsg.innerHTML = 'Birth date required';
        //add error border
        userInput.classList.add('error');
        // valid = false;
        console.log('name not ok')
    }
    else if(regex.test(userInput.value) == false) {
        const errorMsg = document.getElementById('dobError');
        errorMsg.innerHTML = 'Invalid date format(dd/mm/yyyy)';
        //add error border
        userInput.classList.add('error');
    }
    else if(age < 20) {
        const errorMsg = document.getElementById('dobError');
        errorMsg.innerHTML = 'Eligible once you are 20';
        //add error border
        userInput.classList.add('error');
    }
    else{
        errorMsg = document.getElementById('dobError');
        errorMsg.innerHTML = '';
        userInput.classList.remove('error');
        console.log('ok')
    }
}

function validateGender() {

    const container = document.getElementById('radio-container');

    if(document.getElementById('male').checked == false &&
    document.getElementById('female').checked == false && 
    document.getElementById('other').checked == false) {
        const errorMsg = document.getElementById('genderError');
        errorMsg.innerHTML = 'Select the Gender Field';
        //add error border
        container.classList.add('error');
    }
    else {
        const errorMsg = document.getElementById('genderError');
        errorMsg.innerHTML = '';
        //remove error border
        container.classList.remove('error');
    }
}

function validateState() {
    const userInput = document.getElementById('country-state');

    console.log("value "+userInput.options[userInput.selectedIndex].value)

    if(userInput.options[userInput.selectedIndex].value == "Select Your State") {
        const errorMsg = document.getElementById('selectError');
        errorMsg.innerHTML = 'Please select this field';
        //add error border
        userInput.classList.add('error');
        console.log('select not ok')
    }
    else{
        const errorMsg = document.getElementById('selectError');
        errorMsg.innerHTML = '';
        //remove error border
        userInput.classList.remove('error');
        // valid = true;
        console.log('ok')
    }
}

function validatePhoneNumber() {
    const userInput = document.getElementById('mobile-number');

    const regex = /^[6-9]{1}[0-9]{9}$/;

    if(!regex.test(userInput.value)) {
        const errorMsg = document.getElementById('phoneError');
        errorMsg.innerHTML = 'Enter valid Phone number Start with (6-9) with 10 numbers only!! and cannot be empty';
        //add error border
        userInput.classList.add('error');
    }
    else {
        const errorMsg = document.getElementById('phoneError');
        errorMsg.innerHTML = '';
            //remove error border
        userInput.classList.remove('error');
    }
}

function validateEducation() {
    const userInput = document.getElementById('education-select');

    if(userInput.options[userInput.selectedIndex].value == "Select Education") {
        const errorMsg = document.getElementById('educationError');
        errorMsg.innerHTML = 'Please select this field';
        //add error border
        userInput.classList.add('error');
        console.log('select not ok')
    }
    else{
        const errorMsg = document.getElementById('educationError');
        errorMsg.innerHTML = '';
        //remove error border
        userInput.classList.remove('error');
        console.log('ok')
    }
}

function validatePassingYear() {
    const userInput = document.getElementById('year-passing');

    const len = userInput.value.length;

    if(len <= 0) {
        const errorMsg = document.getElementById('yearOfPassingError');
        errorMsg.innerHTML = 'Please fill out this field';
        //add error border
        userInput.classList.add('error');
    }
    else {
        const errorMsg = document.getElementById('yearOfPassingError');
        errorMsg.innerHTML = '';
        //remove error border
        userInput.classList.remove('error');
    }
}

function validateDepartment() {
    const userInput = document.getElementById('department');

    if(userInput.options[userInput.selectedIndex].value == "Select Your Depatment") {
        const errorMsg = document.getElementById('departmentError');
        errorMsg.innerHTML = 'Please select this field';
        //add error border
        userInput.classList.add('error');
        console.log('select not ok')
    }
    else{
        const errorMsg = document.getElementById('departmentError');
        errorMsg.innerHTML = '';
        //remove error border
        userInput.classList.remove('error');
        console.log('ok')
    }
}

function validateCheckBox() {
    const userInput = document.getElementById('check-box').checked;
    const container = document.getElementById('check-container');

    if(userInput == false){
        const errorMsg = document.getElementById('checkBoxError');
            errorMsg.innerHTML = 'Please tick the Checkbox';
            container.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('checkBoxError');
            errorMsg.innerHTML = '';
            container.classList.remove('error');
    }
}
function booking_cnfm_close() {
    document.getElementById('booking-cnfm').style.display = 'none';
}
function booking_err_close() {
    document.getElementById('booking-login-err').style.display = 'none';
}
function booking_err2_close() {
    document.getElementById('booking-login-err2').style.display = 'none';
}
function predict() {
    document.getElementById('predict_form').style.display = 'block';
}
function predict_close() {
    document.getElementById('predict_form').style.display = 'none';
}

function cnfm_login_close1() {
    document.getElementById('login-cnfm').style.display = 'none';
}
function cnfm_login_close2() {
    document.getElementById('login-err').style.display = 'none';
}
function cnfm_login_close3(){
    document.getElementById('login-invalid').style.display = 'none';
}

function cnfm_predict_close0() {
    document.getElementById('predict-result0').style.display = 'none';
}
function cnfm_predict_close1(){
    document.getElementById('predict-result1').style.display = 'none';
}

function book_login_cnfm_close(){
    document.getElementById('book-login-cnfm').style.display = 'none';
}

var password = document.getElementById('password');
var rpt_password = document.getElementById('repeat-password');
function validatePassword() {
    if (password.value != rpt_password.value) {
        rpt_password.setCustomValidity("Passwords Don't Match");
    } else {
        rpt_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
rpt_password.onkeyup = validatePassword;

// var booking_cnfm = document.getElementsByClassName('book-consult');
// for (var i = 0; i < booking_cnfm.length; i++) {
//     booking_cnfm[i].addEventListener("click", () => {
//         document.getElementById('book_time').style.display = 'block';
//     });
// }
function close_cnfm_booking() {
    document.getElementById('booking')
}
var close_booking = document.getElementById('close_booking');
close_booking.addEventListener("click", () => {
    document.getElementById('book_time').style.display = 'none';
});

document.getElementById('book_test').addEventListener("click", () => {
    document.getElementById('book_time_test').style.display = 'block';
});
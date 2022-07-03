// for login and signup

var login = document.getElementById('login');
login.addEventListener("click", function(){
    document.getElementById('login-form').style.display = 'block';
});
var close_login = document.getElementById('close_btn_login');
close_login.addEventListener("click", function(){
    document.getElementById('login-form').style.display = 'none';
});

// var frgt = document.getElementById('frgt-psw');
// frgt.addEventListener("click", function(){
//     document.getElementById('frgt-psw-form').style.display = 'block';
// });
// var close_frgt = document.getElementById('frgt-psw-close');
// close_frgt.addEventListener("click", function(){
//     document.getElementById('frgt-psw-form').style.display = 'none';
// });

var signup = document.getElementById('signuplink');
signup.addEventListener("click", function(){
    document.getElementById('signup-form').style.display = 'block';
});
var close_signup = document.getElementById('close_btn_signup');
close_signup.addEventListener("click", function(){
    document.getElementById('signup-form').style.display = 'none';
});

//for chatbot window

var usrchatbtn1 = document.getElementsByClassName('usrbtnop1');
for (var i=0; i<usrchatbtn1.length; i++){
    usrchatbtn1[i].addEventListener("click", function(){
        document.getElementById('usrchatbtn1a').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('botchat-container2').style.visibility = 'visible';
        document.getElementById('usrchat-container2a').style.visibility = 'visible';
        document.getElementById('usroption1b').remove();
        document.getElementById('usroption1c').remove();
        document.getElementById('usroption1d').remove();
        document.getElementById('usroption1e').remove();
        document.getElementById('usroption1f').remove();
    })
}

var usrchatbtn1a = document.getElementById('usrchatbtn1a');
usrchatbtn1a.addEventListener("click", function(){
    document.getElementById('usroption2c').remove();
    var usrchatbtn2a = document.getElementById('usrchatbtn2a');
    usrchatbtn2a.addEventListener("click", function(){
        document.getElementById('usrchatbtn2a').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2b').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        
        var rating = document.getElementById('usrchatbtn2a');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
    var usrchatbtn2b = document.getElementById('usrchatbtn2b');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2b').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2a').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "We'll mail your password on your regeistered Email-id shortly.";

        var rating = document.getElementById('usrchatbtn2b');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
});
var usrchatbtn1b = document.getElementById('usrchatbtn1b');
usrchatbtn1b.addEventListener("click", function(){
    document.getElementById('usrchatbtn1a').innerHTML = "Doctor consultation";
    document.getElementById('botchat2').innerHTML = "Please select a specific topic about Doctor consultation you are facing a trouble with."
    document.getElementById('usrchatbtn2a').innerHTML = "Book an appointment";
    document.getElementById('usrchatbtn2b').innerHTML = "Emergency/ Immidiate consultation";
    
    document.getElementById('usroption2c').remove();
    var usrchatbtn2a = document.getElementById('usrchatbtn2a');
    usrchatbtn2a.addEventListener("click", function(){
        document.getElementById('usrchatbtn2a').style.cssText = `
            background-color: blue;
            color: white;
        `;
        location.href = "consultation.html";
    });
    var usrchatbtn2b = document.getElementById('usrchatbtn2b');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2b').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2a').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "Please contact to our customer-care representative from Contact us section to book an emergency appointment";

        var rating = document.getElementById('usrchatbtn2b');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });  
});
var usrchatbtn1c = document.getElementById('usrchatbtn1c');
usrchatbtn1c.addEventListener("click", function(){
    document.getElementById('usrchatbtn1a').innerHTML = "Lab Test booking";
    document.getElementById('botchat2').innerHTML = "Please select a specific topic about Lab Test you are facing a trouble with."
    document.getElementById('usrchatbtn2a').innerHTML = "Book a Test";
    document.getElementById('usrchatbtn2b').innerHTML = "Problem in booking a Test";
    document.getElementById('usrchatbtn2c').innerHTML = "Unable to find Test results";

    var usrchatbtn2a = document.getElementById('usrchatbtn2a');
    usrchatbtn2a.addEventListener("click", function(){
        document.getElementById('usrchatbtn2a').style.cssText = `
            background-color: blue;
            color: white;
        `;
        location.href = "lab_test.html";
    });
    var usrchatbtn2b = document.getElementById('usrchatbtn2b');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2b').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2a').remove();
        document.getElementById('usroption2c').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "Please send your query in Contact us section. Our customer-care representative will reach back to you ASAP";

        var rating = document.getElementById('usrchatbtn2b');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
    var usrchatbtn2b = document.getElementById('usrchatbtn2c');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2c').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2a').remove();
        document.getElementById('usroption2b').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "You can check your Test results in your profile section and it is also mailed to you on your regeistered Email-id.";

        var rating = document.getElementById('usrchatbtn2c');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
});
var usrchatbtn1d = document.getElementById('usrchatbtn1d');
usrchatbtn1d.addEventListener("click", function(){
    document.getElementById('usrchatbtn1a').innerHTML = "Medicine ordering";
    document.getElementById('botchat2').innerHTML = "Please select a specific topic about Medicine ordering you are facing a trouble with."
    document.getElementById('usrchatbtn2a').innerHTML = "How to order a medicine?";
    document.getElementById('usrchatbtn2b').innerHTML = "Problem regarding processing an order";
    document.getElementById('usrchatbtn2c').innerHTML = "Tracking an order";

    var usrchatbtn2b = document.getElementById('usrchatbtn2a');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2a').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2b').remove();
        document.getElementById('usroption2c').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "Go to the medicine section above on the navigation bar. Choose the required medication in the required quantity and place your order. We'll receive the payment at the time of delivery.";

        var rating = document.getElementById('usrchatbtn2a');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
    var usrchatbtn2b = document.getElementById('usrchatbtn2b');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2b').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2a').remove();
        document.getElementById('usroption2c').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "Please send your query in Contact us section. Our customer-care representative will reach back to you ASAP";

        var rating = document.getElementById('usrchatbtn2b');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
    var usrchatbtn2b = document.getElementById('usrchatbtn2c');
    usrchatbtn2b.addEventListener("click", function(){
        document.getElementById('usrchatbtn2c').style.cssText = `
            background-color: blue;
            color: white;
        `;
        document.getElementById('usroption2a').remove();
        document.getElementById('usroption2b').remove();
        document.getElementById('botchat-container3a').style.visibility = 'visible';
        document.getElementById('para-botchat3a').innerHTML = "GO to third party link which was sent to you by mail during the shipment to track your order.";

        var rating = document.getElementById('usrchatbtn2c');
        rating.addEventListener("click", setTimeout(function() {
            document.getElementById('final-botchat-container').style.visibility = 'visible';
        }, 2000));
    });
});
var usrchatbtn1e = document.getElementById('usrchatbtn1e');
usrchatbtn1e.addEventListener("click", function(){
    document.getElementById('usrchatbtn1a').innerHTML = "Order/Booking cancellation";
    document.getElementById('usrchat-container2a').remove();
    document.getElementById('botchat-container3a').remove();
    document.getElementById('botchat2').innerHTML = "Because of the nature of the resources we do not encourage cancellation but if for some reason  the order is to be canceled from our end then we'll notify you about it by mail. You may file query if your medicines or test have not been delivered to get the appropriate refund."

    setTimeout(function() {
        document.getElementById('final-botchat-container').style.visibility = 'visible';
    }, 2000);
});
var usrchatbtn1f = document.getElementById('usrchatbtn1f');
usrchatbtn1f.addEventListener("click", function(){
    document.getElementById('usrchatbtn1a').innerHTML = "Topic is not mentioned";
    document.getElementById('usrchat-container2a').remove();
    document.getElementById('botchat-container3a').remove();
    document.getElementById('botchat2').innerHTML = "If you're unable to find an appropriate topic of your query or satisfactory solution, then contact our customer-care representative from Contact us section."

    setTimeout(function() {
        document.getElementById('final-botchat-container').style.visibility = 'visible';
    }, 2000);
});
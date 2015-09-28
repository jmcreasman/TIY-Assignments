// Stores the values placed in the form input fields.
$("#first_name").blur(function() {
});
$("#last_name").blur(function() {
});
$("#email").blur(function() {
});
$("#country").blur(function() {
});
$("#bio").blur(function() {
});
$("#phone").blur(function() {
});
$("#affiliations").blur(function() {
});
$("#occupation").blur(function() {
});
$("#cat_name").blur(function() {
});
$("#gagdet").blur(function() {
});
$("#talent").blur(function() {
});
$("#drink").blur(function() {
});
$("#power").blur(function() {
});
$("#weapon").blur(function() {
});
$("#comments").blur(function() {
});
// Prints out the values stored in the code above when the submit button is
// pressed.
$("input.cbp-mc-submit").click(function() {
 console.log("First Name:");
 console.log($('#first_name').val());
 console.log("Last Name:");
 console.log($('#last_name').val());
 console.log("Email:");
 console.log($('#email').val());
 console.log("Country:");
 console.log($('#country').val());
 console.log("Biography:");
 console.log($('#bio').val());
 console.log("Phone Number:");
 console.log($('#phone').val());
 console.log("Listed Affiliations:");
 console.log($('#affiliations').val());
 console.log("Occupation:");
 console.log($('#occupation').val());
 console.log("Cat's Name:");
 console.log($('#cat_name').val());
 console.log("Talent:");
 console.log($('#talent').val());
 console.log("Drink:");
 console.log($('#drink').val());
 console.log("Power:");
 console.log($('#power').val());
 console.log("Weapon:");
 console.log($('#weapon').val());
 console.log("Comments:");
 console.log($('#comments').val());
});

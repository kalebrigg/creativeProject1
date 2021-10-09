// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var btn2 = document.getElementsById("but2");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
//btn2.onclick = function() {
//  modal.style.display = "none";
//}

function closeForm() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function validateForm() {
  var contactName = document.getElementById("contactName").value;
  var contactEmail = document.getElementById("contactEmail").value;
  var contactNumber = document.getElementById("contactNumber").value;
  var contactMessage = document.getElementById("contactMessage").value;

  if (contactName === "" || contactEmail === "" || contactNumber === "" || contactMessage === "" )
  {
    return;
  }
  else {
    sendEmail();
  }
}

function sendEmail() {
  console.log("about to send");
  var contactName = document.getElementById("contactName").value;
  var contactEmail = document.getElementById("contactEmail").value;
  var contactNumber = document.getElementById("contactNumber").value;
  var contactMessage = document.getElementById("contactMessage").value;

	Email.send({
	Host: "smtp.gmail.com",
	Username : "christyriggrealtorwebsite@gmail.com",
	Password : "Christyrigg232323",
	To : 'kaleb2323rigg@gmail.com',
	From : "christyriggrealtor@gmail.com",
	Subject : "New Contact Request - Web",
	Body : "Christy somebody wants you to contact them!<br>"
            + "Name: " + contactName + "<br>"
            + "Email: " + contactEmail + "<br>"
            + "Phone Number: " + contactNumber + "<br>"
            + "Message: " + contactMessage + "<br>",
	}).then(
		displayEmailSent();
	);
}

function emailSent() {
  
}

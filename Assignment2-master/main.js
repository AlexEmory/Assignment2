// This will wait for the DOM to be ready, and then execute main
document.addEventListener('DOMContentLoaded', main);

/**
 * All references to the DOM should be made in this function,
 * or by a function called from this function. Otherwise, we 
 * run the risk of trying to reference content that hasn't
 * yet loaded.
 */
function main() {

}

/**
 * This function runs when the order form is submitted.
 * For now, nothing actually happens here. If we were building
 * out this store further, this would be where we would send
 * data to our server for processing.
 */
 function buyNow(event){
	 event.preventDefault();
	 //Put address and name stuff here
	 document.getElementById("orderForm").style.visibility = "visible";
 }
function placeOrder(event) {
  // This prevents this event from bubbling up from the button to the
  // form. Without it, the form will try to navigate away from our page.
  event.preventDefault();
  // TODO: Log the form data here
	var name = document.getElementById("name").value;
	var quantity = document.getElementById("quantity").value;
	var address = document.getElementById("address").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var creditcard = document.getElementById("creditcard").value;
	console.log(['name: ' + name, 'quantity: ' + quantity, 'address: ' + address, 'PhoneNumber: ' + phonenumber, 'Creditcard: ' + creditcard]);
  alert('Order placed!');
  return false;
}

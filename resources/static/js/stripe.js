 const stripe = Stripe('pk_test_51OrajSH3ZtJb2AyU3P4aZ1zD1ImzZZXuXhJcdnGcXOe0ngDK5QkI4TGb1d3QVve9BP38iqHR8dKKdtboJ0cZkvHX00O2I0IlMw');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
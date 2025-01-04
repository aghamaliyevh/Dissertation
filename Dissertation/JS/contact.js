document.getElementById("orderForm").addEventListener('submit', function(event) {
    event.preventDefault(); // Formun göndərilməsini dayandırır
    document.getElementById("feedback").textContent = "Sifarişiniz təsdiqləndi. Məlumat veriləcək.";
    document.getElementById("feedback").style.color = 'green';
    this.reset();
});
// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
    //Hide Results
    document.getElementById('results').style.display = 'none';
    //SHow Loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 1000);
    e.preventDefault();
});
// Calculate Results
function calculateResults() {
    // UI Vars
    var UIamount = document.getElementById('amount');
    var UIinterest = document.getElementById('interest');
    var UIyears = document.getElementById('years');
    var UImonthlyPayment = document.getElementById('monthly-payment');
    var UItotalPayment = document.getElementById('total-payment');
    var UItotalInterest = document.getElementById('total-interest');
    var principal = parseFloat(UIamount.value);
    var calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
    var calculatedPayments = parseFloat(years.value) * 12;
    // Compute Monthly Payment
    var x = Math.pow(1 + calculatedInterest, calculatedPayments);
    var monthly = (principal * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        //Show Results
        document.getElementById('results').style.display = 'block';
        //Hide Loader
        document.getElementById('loading').style.display = 'none';
    }
    else {
        showError('Error! Please check the numbers.');
    }
}
// Show Error
function showError(error) {
    //Hide Results
    document.getElementById('results').style.display = 'none';
    //Hide Loader
    document.getElementById('loading').style.display = 'none';
    //Create a div
    var errorDiv = document.createElement('div');
    // Get elements
    var card = document.querySelector('.card');
    var heading = document.querySelector('.heading');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    //Insert error above heading
    card.insertBefore(errorDiv, heading);
    // Clear after 3 seconds
    setTimeout(clearError, 3000);
}
// Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}

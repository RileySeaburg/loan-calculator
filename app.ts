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
function calculateResults(){

    // UI Vars
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalPayment = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute Monthly Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if (isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calculatedPayments) -principal).toFixed(2);

        //Show Results
        document.getElementById('results').style.display = 'block';
        //Hide Loader
        document.getElementById('loading').style.display = 'none';
    } else {
       showError('Error! Please check the numbers.');
    }







    
}

// Show Error
function showError(error){
        //Hide Results
        document.getElementById('results').style.display = 'none';
        //Hide Loader
        document.getElementById('loading').style.display = 'none';

    //Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


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
function clearError(){
    document.querySelector('.alert').remove();
}
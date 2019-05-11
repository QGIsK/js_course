//listen for submit
document.querySelector("#loan-form").addEventListener("submit", function(e) {
    //Hide results
    document.querySelector("#results").style.display = "none";
    
    //show loader
    document.querySelector("#loading").style.display = "block";

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

//calculateResults function
function calculateResults() {

    //ui vars
    const amount = document.querySelector("#amount");
    const interest = document.querySelector("#interest");
    const years = document.querySelector("#years");
    const monthlyPayment = document.querySelector("#monthly-payment");
    const totalPayment = document.querySelector("#total-payment");
    const totalInterest = document.querySelector("#total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;  
    
    //compute monthly calculatedPayments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        //hide loader
        document.querySelector("#loading").style.display = "none";
        
        //show results
        document.querySelector("#results").style.display = "block";
    } else {
        showError("Please check your numbers.");
    }
}

function showError(eMsg) {
    //Hide results
    document.querySelector("#results").style.display = "none";
    
    //show loader
    document.querySelector("#loading").style.display = "none";
    //create div
    const eDiv = document.createElement("div");
    
    //get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    //add alert classes
    eDiv.className = "alert alert-danger";
    
    //create textnode and append
    eDiv.appendChild(document.createTextNode(eMsg));

    //insert error above
    card.insertBefore(eDiv, heading);

    //clear e after 2.5 sec
    setTimeout(clearE, 2500);
}

function clearE() {
    document.querySelector(".alert").remove();
}
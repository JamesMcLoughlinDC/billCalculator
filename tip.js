


function calculate() {

//set variables equal to tip, bill amount and number of ppl.

    var billAmount = document.getElementById("billAmount").value;
    var numPeople = document.getElementById("numPeople").value;
    var tipAmount = parseFloat(document.getElementById("tipAmount").value);

//check to make sure that all fields have been entered...

    if (billAmount == "") {
        alert("enter a bill amount")
    }

    else if (numPeople == "") {
        alert("enter the number of people in your party")
    }

    else {
        //Calculate the amount each person must pay then update innerhtml...

        var perPerson = ((billAmount * (1 + tipAmount)) / numPeople).toFixed(2);
        var totalAmount = ((billAmount) * (1 + tipAmount));

        document.getElementById("finalText").innerHTML = 'The per person cost with a ' + tipAmount*100 + '% tip is:<br> $' + perPerson + "<br> for a total of:<br> $" + totalAmount;


    }



}
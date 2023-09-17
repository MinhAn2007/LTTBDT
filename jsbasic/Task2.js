//Test 1
console.log("Test 1 with data : Mark(78kg,1.69m) and John(92kg,1.95m)")

var massMark = 78
var heightMark = 1.69
var bmiMark = massMark / heightMark ** 2
console.log("BMI cua John" + ' = ' + bmiMark.toFixed(1))

var massJohn = 92
var heightJohn = 1.95
var bmiJohn = massJohn / (heightJohn ** 2)
console.log("BMI cua Mark" + ' = ' + bmiJohn.toFixed(1))

var markHigherBMI = bmiMark > bmiJohn ? true : false

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!")
} else
    console.log("John's BMI is higher than Mark's!")
    //Test 2
if (markHigherBMI) {
    console.log("Mark's BMI (" + bmiMark.toFixed(1) + ") " + "is higher than John's! (" + bmiJohn.toFixed(1) + ")")
} else
    console.log("John's BMI (" + bmiJohn.toFixed(1) + ") " + "is higher than Mark's! (" + bmiMark.toFixed(1) + ")")
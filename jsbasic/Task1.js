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

console.log("Mark's BMI higer John BMI is " + markHigherBMI);

//Test 2
console.log("Test 1 with data : Mark(95kg,1.88m) and John(85kg,1.76m)")

var massMark2 = 95
var heightMark2 = 1.88
var bmiMark2 = massMark2 / (heightMark2 ** 2)
console.log("BMI cua Mark" + ' = ' + bmiMark2.toFixed(1))

var massJohn2 = 85
var heigthJohn2 = 1.76
var bmiJohn2 = massJohn2 / heigthJohn2 ** 2
console.log("BMI cua John" + ' = ' + bmiJohn2.toFixed(1))

var markHigherBMI2 = bmiMark2 > bmiJohn2 ? true : false

console.log("Mark's BMI higer John BMI(data2) is " + markHigherBMI2);
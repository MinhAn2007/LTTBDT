//data1
console.log("Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110")

var scoreDolphins = [96, 108, 89]
var scoreKoalas = [88, 91, 110]

//data 2 
console.log("§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123")

var scoreDolphins = [97, 112, 101]
var scoreKoalas = [109, 95, 123]

//data 3
console.log("§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106")
var scoreDolphins = [97, 112, 101]
var scoreKoalas = [109, 95, 106]

const avgDolphins = scoreDolphins.reduce((a, b) => a + b, 0) / scoreDolphins.length;
const avgKoalas = scoreKoalas.reduce((a, b) => a + b, 0) / scoreDolphins.length;

if (avgDolphins >= 100 && avgKoalas >= 100) {
    if (avgDolphins > avgKoalas)
        console.log("The winner is Dolphins")
    else if (avgKoalas == avgDolphins)
        console.log("Drawwwwwwwwwwwwww!!!!!!!!!!!")
    else
        console.log("The winner is Koalas")
} else
    console.log("No team wins the trophy")
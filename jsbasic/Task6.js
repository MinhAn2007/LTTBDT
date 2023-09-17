var clacTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

var bills = [125, 555, 44]

var tips = [clacTip(bills[0]), clacTip(bills[1]), clacTip(bills[2])]

var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(`The bill was ${bills[0]}, the tip was ${tips[0]}, and the total value ${total[0]}`) 

console.log(`The bill was ${bills[1]}, the tip was ${tips[1]}, and the total value ${total[1]}`)

console.log(`The bill was ${bills[2]}, the tip was ${tips[2]}, and the total value ${total[2]}`)
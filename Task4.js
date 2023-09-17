

var bill = 275 // 40, 430

var totalBill = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${totalBill}, and the total value ${bill + totalBill}`)
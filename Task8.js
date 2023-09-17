const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

const totalBill = () => {
    for (let i = 0; i < bill.length; i++) {
        tips.push(calcTip(bill[i]));
        totals.push(bill[i] + tips[i]);
    }
}

totalBill();

for (let i = 0; i < bill.length; i++) {
    const billAmount = bill[i];
    const tip = tips[i];
    const total = totals[i];
    console.log(`The bill was $${billAmount} and the tip was $${tip.toFixed(1)}, the total value is $${total.toFixed(1)}`);
}

//bonus
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}

console.log(calcAverage(totals));
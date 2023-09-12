var bill = document.getElementById("txtBill").vaule;

function btnClick() {
    let tip = 0;
    if (bill >= 50 && bill <= 300)
        tip = (bill * 15) / 100;
    else
        tip = (bill * 20) / 100;
}
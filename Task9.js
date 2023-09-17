//data 1
const temperatures = [17, 21, 23];

//data 2

const temperatures2 = [12, 5, -5, 0, 4];

var printForecast = (arr) => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `...${arr[i]}°C in ${i + 1} days `;
    }
    console.log(str);
}

printForecast(temperatures2);
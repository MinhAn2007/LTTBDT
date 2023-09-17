var clacAverage =  ( arr ) =>{
    return arr.reduce((a,b) => a + b, 0) / arr.length;
}

var checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas * 2)
            console.log("The winner is Dolphins(" + avgDolphins + ")vs(" +avgKoalas + ")");
        else if (avgKoalas > avgDolphins * 2)
            console.log("The winner is Koalas(" + avgKoalas + ")vs(" +avgDolphins + ")");
        else
            console.log("No winner(" + avgKoalas + ")vs(" +avgDolphins + ")");

}
//data1 Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
var scoreDolphins = [44, 23, 71]
var scoreKoalas = [65, 54, 49]
//data2 Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
var scoreDolphins = [85, 54, 41]
var scoreKoalas = [23, 34, 27]
var avgDolphins = clacAverage(scoreDolphins)
var avgKoalas = clacAverage(scoreKoalas)
checkWinner(avgDolphins, avgKoalas);
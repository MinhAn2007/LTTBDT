const pMlier = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = ((this.mass / this.height ** 2).toFixed(1));
        return this.BMI;
    }
}
const pSmith = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI =(( this.mass / this.height ** 2).toFixed(1));
        return this.BMI;
    }

}

if(pMlier.calcBMI() > pSmith.calcBMI())
    console.log(`${pMlier.name}'s BMI (${pMlier.BMI}) is higher than ${pSmith.name}'s (${pSmith.BMI})!`)
else
    console.log(`${pSmith.name}'s BMI (${pSmith.BMI}) is higher than ${pMlier.name}'s (${pMlier.BMI})!`)

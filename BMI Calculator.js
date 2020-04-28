
function bmiCaculator(weight, height){
    var bmi = weight/Math.pow(height,2)
    return Math.round(bmi);
}
var bmi = bmiCaculator(83,1.8);

console.log(bmi)

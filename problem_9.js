// create a function that takes a voltage , and current , and then return the calculated power =>
function circuitPower(voltage , current){
    console.log("The Voltage Is = "+voltage+" Volt");
    console.log("The Current Is = "+current+" Amper");
    return "The Circuit Power Is = "+voltage * current+" Oma";
};
console.log(circuitPower(230 , 10)+" \n");
console.log(circuitPower(110 , 3)+"\n");
console.log(circuitPower(480 , 20));
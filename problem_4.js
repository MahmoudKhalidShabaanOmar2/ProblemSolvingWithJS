// create a function to get a number as an argument , increments the number by one , and then return results =>
function incrementedNumberByOne(num){
    console.log("The Number Is = ",num);
    return "The Inremented Number By One Is = "+Number(++num)
};
console.log(incrementedNumberByOne(0)+"\n");
console.log(incrementedNumberByOne(9)+"\n");
console.log(incrementedNumberByOne(-3)+"\n");
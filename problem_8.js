// create a function that takes arrays of numbers as an argument , and then return only the frist number =>
function fristNumberFromArrayOfNumbers(arrayOfNumbers){
    console.log("The Array Of All Numbers Is : "+arrayOfNumbers);
    return "The Frist Number From The Array Of All Numbers Is : "+arrayOfNumbers[0];
};
console.log(fristNumberFromArrayOfNumbers([1 , 2 , 3])+"\n");
console.log(fristNumberFromArrayOfNumbers([80 , 5 , 100])+"\n");
console.log(fristNumberFromArrayOfNumbers([-500 , 0 , 50]));
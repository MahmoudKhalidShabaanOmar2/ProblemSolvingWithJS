// create a function to get number of seconds from number of hours =>
function hoursToSeconds(numberOfHours){
    console.log("The Numbers Of Hours Is = "+numberOfHours+" Hours.");
    return "The Numbers Of Seconds Is = "+numberOfHours * 60 * 60+" Seconds.";
};
console.log(hoursToSeconds(2)+"\n");
console.log(hoursToSeconds(10)+"\n");
console.log(hoursToSeconds(24));
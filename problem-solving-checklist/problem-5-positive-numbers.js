// find the positive numbers

function findThePositive(numbers){
    let positiveNumbers = [];
    for(let num of numbers){
        if(num < 0){
            break;
        }else{
            positiveNumbers.push(num);
        }
    }
    return positiveNumbers;
}


let myArray = [23,35,455,123,12,22,231,545,64,64,64,64,644,-64,65,8,3,648,86,896,65,385,123,-23,324,-1,13,34,33,52,25,-34,32,252,45];

let showPositive = findThePositive(myArray);
console.log(showPositive);
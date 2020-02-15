//Queue Reconstruction by Height
/**

**/
//Input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
//Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
var reconstructQueue = function(people) {
    
    let orderArray = Array(people.length);
    people.sort(function(a,b){
               return b[0] - a[0] || a[1] - b[1]; //order arrays from height first and after order the height groups by k
               }
    )
    for(let i = 0; i < people.length; i++){
        let person = people[i];
        let index = people[i][1];
        if(orderArray[index] == null){
            orderArray[index] = person;
        }
        else{
            orderArray.splice(index, 0, person)
        }
    }
    return(orderArray.slice(0, people.length))
    
 };
var reconstructQueueTest = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
console.log("Queue Reconstruction by Height");
console.log("Input: [" + reconstructQueueTest + "]");
console.log("Output: [" + reconstructQueue(reconstructQueueTest) + "]")
console.log("");

//Daily Temperatures
/**
	Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
**/
// Input: [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
var dailyTemperatures = function(T) {
    let distance = [];
    for(let i = 0; i < T.length; i++){
        let days = 1;
        for(let j = i + 1; j < T.length; j++){
            if(j == T.length - 1 && T[i] >= T[j]) days = 0;
            else if(T[i] >= T[j]) days++;
            else if(T[i] < T[j]) break;
        }
        if(i == T.length - 1) distance.push(0)
        else{
            distance.push(days)
        }
    }
    return distance;
};

var dailyTemperaturesTest = [73, 74, 75, 71, 69, 72, 76, 73];
console.log("Daily Temperatures");
console.log("Input: [" + dailyTemperaturesTest + "]");
console.log("Output: [" + dailyTemperatures(dailyTemperaturesTest) + "]");
console.log("");



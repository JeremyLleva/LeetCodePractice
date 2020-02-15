//Two Sum 
//Given an array of ints return the indicies of the two numbers
//Each input has only one solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
**/
var twoSum = function(nums, target) {
    if(nums.length === 2) 
    	{return [0,1]}
    for(let i = 0; i < nums.length ; i++){
    	for(let j = 0; j < nums.length; j++){
    		if(nums[i] + nums[j] === target && i != j){
    			return [i,j];
    		}
    	}
    }
}

let twoSumsTest = [2,7,11,15];
console.log("twoSum: ")
console.log("Array: " + twoSumsTest +", Target: " + 9 + " = " + "[" + twoSum(twoSumsTest, 9) + "]");
// console.log(twoSum(twoSumsTest, 9));
//expected [0,1]


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
console.log("Input: Array: " + twoSumsTest +", Target: " + 9 )
console.log(`Output: [${twoSum(twoSumsTest, 9)}]`)
console.log("");
// console.log(twoSum(twoSumsTest, 9));
//expected [0,1]


//Best Time to Buy and SellStock
//Design an algorithm to find maximum profit based on the stock prices at ith element
/**
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
**/

var maxProfit = function(prices){
	let mProfit = 0;
	for(let i = 0; i < prices.length; i++){
		for(let j = i; j < prices.length; j++){
			if(prices[j] - prices[i] > mProfit)
				mProfit = prices[j] - prices[i]
		}
	}
	if(mProfit <= 0)
		return 0;

	return mProfit;
}

var maxProfitTest = [7,1,5,3,6,4]
console.log("Best Time to Buy and Sell Stock: ")
console.log("Input: Array: [" + maxProfitTest + "]");
console.log("Output: " + maxProfit(maxProfitTest) );
console.log("");


//Move Zeros
//Given an array move all the 0's to the end while maintaining relative order
//Do this in-place
/**
	Input: [0,1,0,3,12]
	Output: [1,3,12,0,0]
**/
var moveZeroes = function(nums) {
    for(let i = nums.length; i >= 0; i--){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }
    }
};
var moveZerosTest = [0,1,0,3,12]
console.log("Move Zeros: ")
console.log("Input: [" + moveZerosTest + "]")
moveZeroes(moveZerosTest);
console.log("Output: [" + moveZerosTest + "]")
console.log("");


//Single Number
//Given a non-empty array of integers every element appears twice execept for one
/**
	Input: [2,2,1]
	Output: 1
**/
var singleNumber = function(nums) {
    nums = nums.sort();
    for(let i = 0; i < nums.length; i += 2){
        if(nums[i] != nums[i+1]) return nums[i];
    }
};

var singleNumberTest =[1,3,5,2,2,45,4,5,3,4,1]
console.log("Single Number: ")
console.log("Input: Array: [" + singleNumberTest + "]");
console.log("Output: " + singleNumber(singleNumberTest) );
console.log("");
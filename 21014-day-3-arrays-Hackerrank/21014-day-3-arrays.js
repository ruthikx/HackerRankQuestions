

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0;i<nums.length;i++){
        let current = nums[i];
        if(current>largest){
            secondLargest=largest;
            largest=current
        }else if(current>secondLargest&&current<largest){
            secondLargest=current
        }
    }
    return secondLargest
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
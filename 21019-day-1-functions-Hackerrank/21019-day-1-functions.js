
/*
 * Create the function factorial here
 */

function factorial(n){
    if(n<0){return "negative"}
    let result = 1;
    for(let i=2;i<=n;i++){
        result *= i
    }
    return result
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
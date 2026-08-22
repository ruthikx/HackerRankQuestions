

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    for(let char of s){
        if(vowels.has(char)){
            console.log(char)
        }
    }
    
    for(let char of s){
        if(!vowels.has(char)){
            console.log(char)
        }
    }
    
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
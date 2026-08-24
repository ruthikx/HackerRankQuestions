

function getLetter(s) {
    let letter;
    // Write your code here
    let ch = s[0];
    
    if("aeiou".includes(ch)){
        letter = "A";
    }else if("bcdfg".includes(ch)){
        letter = "B";
    }else if("hjklm".includes(ch)){
        letter = "C";
    }else{
        letter = "D"
    }
    
    return letter;
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
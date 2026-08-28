

function getGrade(score) {
    let grade;
    // Write your code here
    if(score > 25){
        grade = "A";
    }else if(score > 20){
        grade = "B";
    }else if(score > 15){
        grade = "C";
    }else if(score > 10){
        grade = "D";
    }else{
        grade = "F";
    }
    
    return grade;
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
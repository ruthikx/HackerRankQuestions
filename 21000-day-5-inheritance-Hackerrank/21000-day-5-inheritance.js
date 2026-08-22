
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function(){
    return this.w*this.h
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
    constructor(s){
        super(s,s)
    }
}


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
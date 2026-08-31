

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    const halfPerimeter = perimeter / 2;

    const discriminant =
        Math.sqrt(halfPerimeter ** 2 - 4 * area);

    const side1 = (halfPerimeter + discriminant) / 2;
    const side2 = (halfPerimeter - discriminant) / 2;
    return [side1,side2].sort((a,b)=>a-b)
}



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
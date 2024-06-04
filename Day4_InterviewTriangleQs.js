/* Triangle sides:
If ALl side equal === equilateral
If 2 sides equal === isosceles
If all side are different ==== saclene
*/

const triangleType = (a, b, c) =>{
    if(a===b && b===c) return "equilateral";
    if(a===b || b===c || a===c) return "isosceles"
    return "saclene"
}

console.log(triangleType(1,1,1) ); //equilateral
console.log(triangleType(1,2,1)); //isosceles
console.log(triangleType(1,2,3)); //scalene
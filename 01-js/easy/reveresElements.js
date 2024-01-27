// Write a program that reverses all the elements of an array

function reveresElements(numbers) {
    let rev=[]
    for(let i=numbers.length-1;i>-1;i--){
        rev.push(numbers[i]);
    }
    return rev;
}
console.log(reveresElements([1,2,3,4,5]));
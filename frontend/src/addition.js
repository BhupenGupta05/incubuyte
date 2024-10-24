export const addition = (numStr) => {
    if(numStr === "") {
        return 0;
    }

    let delimiter = /[,\n;]+/
    let inputStr = numStr;

    if(numStr.startsWith("//")) {
        const delimiterEnd = numStr.indexOf("\n")
        const customDelimiter = numStr.slice(2,delimiterEnd).trim()

        delimiter = new RegExp(`[${customDelimiter}]`)
        
        inputStr = numStr.slice(delimiterEnd + 1)
    }

    // const numbers = numStr.split(/[\n,]/) 
    const numbers = inputStr.split(delimiter).filter(Boolean)

    const negativeNums = numbers.filter(num => num < 0)

    if (negativeNums.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNums.join(", ")}`);
    }

    return numbers.reduce((acc, num) => acc + parseInt(num), 0)
   
}

// console.log(addition("1,2,3,4"));
// console.log(addition("1"));
// console.log(addition(""));
// console.log(addition("1\n2,3"));
// console.log(addition("1,2\n3"));


// try {
//     console.log(addition("//;\n1;2"));   
//     console.log(addition("1,-2,-3,4"));      
// } catch (error) {
//     console.error(error.message);       
// }

// try {
//     console.log(addition("//,\n1,2"));   
//     console.log(addition("//;\n-11;22;-33"));      
// } catch (error) {
//     console.error(error.message);       
// }

// console.log(addition("1,2\n3"));
// console.log(addition("1\n2\n3"));
// console.log(addition("1\n2,3"));

// console.log(addition("//;\n1;2;3"));
// console.log(addition("1\n2,3"));
// console.log(addition("1\n2,3;4"));





const countChar = (word, char) =>{
    word = word.toLowerCase();
    char = char.toLowerCase();

    count = word.split("").reduce((accum, currChar)=>{
        if(currChar === char){
            accum++;
        }
       return accum;
    }, 0);
    return count
}

console.log(countChar("isdewiiNomiiii", "i"));
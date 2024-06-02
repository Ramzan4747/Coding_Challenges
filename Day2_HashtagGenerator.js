const hashtagGenerator = (tag) =>{
 if(tag.length > 280 || tag.trim().length === 0){
    return false
    console.log("Check String");
 } 

tag = tag.split(" ").map((curr) => curr.charAt(0).toUpperCase() + curr.slice(1)).join("");
let hashtag = `#${tag}`;
console.log(hashtag);
}
hashtagGenerator("Kidar jao ge")
// var a=prompt("Enter the string");
// var num=0;
// function vowels(word) {
//     if(word.includes("a","e","i","o","u")){
//         console.log("Vowel")
//     }
//     else{
//         console.log("consonant");
//     }
// }
// vowels(a);


//Vowels

var str=prompt("Enter the string");
var length=str.length;
var count=0;
for(i=0;i<length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
    count++;
    }
}
console.log(count);


// Sum of the digits

// var num=prompt("Enter the number");
// var sum=0;
// var rem=0;

// while(num){
//     rem=num%10;
//     sum+=rem;
//     num=(num-rem)/10;
// }
// console.log(sum);










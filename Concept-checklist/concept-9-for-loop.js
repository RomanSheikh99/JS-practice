// outpur all element of an array using for loop

let myFriends = ["amin","shuvon","duha","milon","rubel","riyad","tuhin","sami"];

// using for of loop
for(let friend of myFriends){
    console.log(friend);
}

// using only for loop
for(let i = 0; i < myFriends.length; i++){
    let friend = myFriends[i];
    console.log(friend);
}
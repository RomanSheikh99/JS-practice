// bestFriend  problem solving

function bestFriend(friends){
    let myfriend = friends[0];
    for(let friend of friends){
        if(friend.length > myfriend.length){
            myfriend = friend;
        }
    }
    return myfriend;
}

let myFriends = ["amin","shuvon","duha","tuhin","milon","rubel","sami","samiur","prapthy","jinto","rimi"];

let mybestfriend = bestFriend(myFriends);
console.log(mybestfriend);
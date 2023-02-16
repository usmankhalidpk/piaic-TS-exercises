let guest_list = ["ali", "hamza", "hassan"];

console.log("\nWe have got three NEW guests... abdullah, talha and zubair");

guest_list.unshift("abdullah");         // added in the start
guest_list.push("talha");               // added in the last
guest_list.splice(2,0,"zubair");        // added at index-2 which is 3rd position | '0' items deleted | "zubair" to be added

console.log("\n - - - - - - - - - - - - - GUEST LIST - - - - - - - - - - - - - - \n")
for(let i=0; i<= guest_list.length-1; i++){
    console.log("Hi "+guest_list[i]+" I would like to invite you to dinner");    
}
console.log("\nwe can invite only two people\n");

while(guest_list.length>2){
    var removed_person: number = guest_list.length-1;
    console.log("Sorry we can't invite "+guest_list[removed_person]);
    guest_list.pop();
}

console.log("\n - - - - - - - - - - - - - NEW GUEST LIST - - - - - - - - - - - - - - \n")
for(let i=0; i<= guest_list.length-1; i++){
    console.log("Hi "+guest_list[i]+" I would like to invite you to dinner");    
}

while(guest_list.length>0){
    guest_list.pop();
}
for(let i=0; i<= guest_list.length-1; i++){
    console.log(guest_list[i]);
}
console.log("\n - - - - - - - - - - - -  FINAL GUEST LIST - - - - - - - - - - - \n");
console.log("nothing printed, final list is empty !")
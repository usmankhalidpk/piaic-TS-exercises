var guest_list = ["ali", "hamza", "hassan"];
console.log("- - - - - - -guest list ----------");
for (var i = 0; i <= guest_list.length - 1; i++) {
    console.log("Hi " + guest_list[i] + " I would like to invite you to dinner");
}
console.log("\nWe have got three NEW guests... abdullah, talha and zubair");
guest_list.unshift("abdullah"); // added in the start
guest_list.push("talha"); // added in the last
guest_list.splice(2, 0, "zubair"); // added at index-2 which is 3rd position | '0' items deleted | "zubair" to be added
console.log("\n - - - - - - - - - - - - - NEW GUEST LIST - - - - - - - - - - - - - - \n");
for (var i = 0; i <= guest_list.length - 1; i++) {
    console.log("Hi " + guest_list[i] + " I would like to invite you to dinner");
}

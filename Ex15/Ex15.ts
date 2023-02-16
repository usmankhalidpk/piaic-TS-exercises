let guest_list = ["ali", "hamza", "hassan"];
console.log("- - - - - - -guest list ----------");
for (let i=0; i <= guest_list.length-1; i++){

    console.log("Hi "+guest_list[i]+" I would like to invite you to dinner");    

}
console.log("\n"+guest_list[1]+" can not come");
guest_list[1]="abdullah";
console.log("\n - - - - - - - - - - - - - NEW GUEST LIST - - - - - - - - - - - - - - \n")
for(let i=0; i<= guest_list.length-1; i++){
    console.log("Hi "+guest_list[i]+" I would like to invite you to dinner");    
}
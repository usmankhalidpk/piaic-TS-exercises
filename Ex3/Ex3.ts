let p_name: string = "uSMAN kHALID";
console.log("name in lower case is " + p_name.toLowerCase() +"\n");
console.log("name in lower case is " + p_name.toUpperCase() +"\n");

console.log("name in title case is " +  
p_name.charAt(0).toUpperCase()+
p_name.substring(1,5).toLowerCase()+" "+
p_name.charAt(6).toUpperCase()+
p_name.substring(7,12).toLowerCase()+"\n");
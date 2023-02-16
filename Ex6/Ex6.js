var p_name = "\n \t \t \t  usman khalid \t \n";
console.log(p_name);
// using regular expressions to select spaces, tabs, or crlfs in the start and ending
p_name = p_name.replace(/^\s+|^\t+|^\n+|\s+$|\t+$|\n+$/g, "");
console.log(p_name);
// -------- a simple way using trim function
//console.log(p_name.trim());

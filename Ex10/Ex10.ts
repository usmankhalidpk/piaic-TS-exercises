var p_name = "\n \t \t \t  usman khalid \t \n";
console.log(p_name);
// using regular expressions to select spaces, tabs, or crlfs in the start and ending
// '^' is used for start of string, '$' is used for end of string
// '\s' is used for space and '+' is used for specifying multiple times match
// '|' is used for OR operation, '\t' for tab and '\n' for new line or crlf
p_name = p_name.replace(/^\s+|^\t+|^\n+|\s+$|\t+$|\n+$/g, "");
console.log(p_name);
// -------- a simple way using trim function
//console.log(p_name.trim());

/*If no arguments are passed to the script, print “No argument”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use length*/

const args = process.argv.slice(2);

if (!args[0]) {
  console.log("No argument");
} else if (!args[1]) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

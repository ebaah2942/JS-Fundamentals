/*If no arguments are passed to the script, print “No argument”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use length*/

const args = process.argv.slice(2);

if (args[0] === 0) {
    console.log("No argument");
}
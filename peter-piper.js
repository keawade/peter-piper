/**
 * peter-piper.js
 * ==============
 * 
 * Count the number of times a capital `P` or lowercase `p` shows up in the
 * Peter Piper tongue twister.
 * 
 * Hint
 * ----
 * Read the 'References' section in the README, which contains links to some
 * JavaScript methods and language features that might be helpful.
 */

var peterpiper = '';
peterpiper += "Peter Piper picked a peck of pickled peppers.";
peterpiper += "A peck of pickled peppers Peter Piper picked.";
peterpiper += "If Peter Piper picked a peck of pickled peppers,";
peterpiper += "Where's the peck of pickled peppers Peter Piper picked?";

var counter = 0;

counter = peterpiper.length - peterpiper.replace(/p/gi, '').length

console.log("There are " + counter + " P's in Peter Piper.");

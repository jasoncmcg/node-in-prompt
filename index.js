var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('\u001b[;H\u001b[2J');

rl.setPrompt('\x1b[32mSelect[#]\x1b[32m>\x1b[0m ');
rl.prompt();

var numbers = new Array;
//var options = ['first', 'second', 'third'];
var options;

//renderOptions();
var cb = {};

rl.on('line', function (entry) {
	var entry = parseInt(entry);

	if (numbers.indexOf(entry) === -1 && !(isNaN(entry))) {
		numbers.push(entry);
	} else if (isNaN(entry)) {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		rl.setPrompt('>');
		rl.close();
		cb(numbers.map(function(obj){return obj - 1}));
		process.exit(0)

	} else {
		numbers.splice(numbers.indexOf(entry), 1);
	}

    process.stdout.write('\x1b[;H\x1b[2J');

	  renderOptions(options);

    console.log('Selected: ', numbers);
    rl.prompt();

    //if (entry === '') {
	//process.exit(0);
    //}

});

function starter(list, callback) {

	if (!(this instanceof starter)) {
		return new starter(list, callback);
	}

	//this.list = list;
  renderOptions(list);
  options = list;
  cb = callback;


}

renderOptions = function(options) {
	console.log("");
	console.log("Just hit enter to finish selection")
    for (i=0; i < options.length; i++) {
		var isSelected = false;

		for (j = 0; j < numbers.length; j++) {

			if (options[numbers[j]-1] === options[i]) {
				isSelected = true
			}

			if (isSelected) {
				process.stdout.write('\x1b[32m');
			} else {
				process.stdout.write('\x1b[0m');
			}

		}
			console.log('Option ', i+1, options[i]);
			process.stdout.write('\x1b[0m');
		}
}


module.exports = starter;
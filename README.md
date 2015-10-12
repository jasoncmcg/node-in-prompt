# node-in-prompt
Prompt to enter information into a node script

## Example

```
var m = require('node-menu-prompter');

var options = ['one','two','three']
m(options, function (selected) {
	
	console.log('returned');
	console.log(selected);
	
});
```

Or, if you want to process, for each:

```
var m = require('node-menu-prompter');
var options = ['one','two','three'];

m(options, function (selected) {
	selected.forEach(function(item){
		console.log('Item was selected: ', options[item]);
	});
});
```

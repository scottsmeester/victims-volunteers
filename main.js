var numVictims = prompt("How many victims need help?");

var victim = [];
var victimOut = [];

var i;
for (i = 0; i < +numVictims; i++) {
	var name = prompt("Enter name of victim " + (i + 1));
	var phone = prompt("Enter phone of victim " + (i + 1));
	var street = prompt("Enter street of victim " + (i + 1));

	victim.push({
		name: name,
		phone: phone,
		street: street});

	victimOut.push(name + " " + phone + " " + street);
}


var numVoluteers = prompt("How many volunteers are available?");

var volunteer = [];
var volunteerOut = [];

for (i = 0; i < +numVoluteers; i++) {
	var name = prompt("Enter name of volunteer " + (i + 1));
	var phone = prompt("Enter phone of volunteer" + (i + 1));
	var street = prompt("Enter street of volunteer " + (i + 1));

	volunteer.push({
		name: name, 
		phone: phone, 
		street: street});

	volunteerOut.push(name + " " + phone + " " + street);

	// create 
}



alert("There are " + numVictims + " that need help.\nThere are " + numVoluteers + " available to help.\n\nVictims:\n" +  victimOut.join("\n") + "\n\nVolunteers:\n" + volunteerOut.join("\n"));

var keepGoing = true;
var i = 1;

var victim = [];


while (keepGoing === true) {
	var name = prompt("Enter name of victim " + i);
	var phone = prompt("Enter phone of victim " + i);
	var street = prompt("Enter street of victim " + i);

	victim.push({
		name: name,
		phone: phone,
		street: street
	});

	i++;

	keepGoing = confirm("Continue entering victims?");

}
// var victimOut = [];
// // turn object into output
// for (i = 0; i < victim.length; i++) {
// 	victimOut.push(victim(i).name + " " + victim(i).phone + " " + victim(i).street);
// }


keepGoing = true;
i = 1;

var volunteer = [];

while (keepGoing === true) {
	var name = prompt("Enter name of volunteer " + i);
	var phone = prompt("Enter phone of volunteer " + i);
	var street = prompt("Enter street of volunteer " + i);

	volunteer.push({
		name: name,
		phone: phone,
		street: street
	});

	i++;

	keepGoing = confirm("Continue entering volunteers?");

}


// alert("There are " + numVictims + " that need help.\nThere are " + numVoluteers + " available to help.\n\nVictims:\n" +  victimOut.join("\n") + "\n\n Volunteers:\n" + volunteerOut.join("\n"));
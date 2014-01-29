function Student (name){
	this.name = name || '???';
	this.compSciBackground = false;
	this.needHousing = true;
	this.likeBeer = true;
	this.graduated = false;

	this.graduate = function(){
		this.graduated = true;
	};
}

// this would create instances that would not change if you manipulated the categories of the prototype.
function Student (name){
	if (name) { this.name = name }
}

Student.prototype = {
	name: name || '???',
	compSciBackground: false,
	needHousing: true,
	likeBeer: true,
	graduated: false,

	graduate: function(){
		this.graduated = true;
	}
}

// this version allows for changes to the prototype that would add to the instances also created. 


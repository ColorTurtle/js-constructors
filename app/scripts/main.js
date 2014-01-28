console.log('Hello there, thanks for checking out my program!');
console.log('To start off, lets say you are an appartment owner who wants to track payments... during a zombie apacolypse.');
console.log('1. Create your new apartment unit by using the \'AptUnit(a,b)\' function. Argument \'a\' will be your apartment unit\'s number. Variable \'b\' will be the name of the tenant. I\'ve already created \'blueHouse\' for you to see what all will be logged with your entry.');
console.log('2. Create information about your tenant using the \'CreateCharacter(name)\'. I have already created \'joe\'.');
console.log('3. Create information about any pesky neighborhood zombies using the \'CreateZombie(name)\' function. \'zombieFred\' has already been created for you.');
console.log('Zombies can: bite(victim), breakDoor(unitNumber), & patch(unitNumber)');
console.log('People can: nordicKill(zombie), breakDoor(unitNumber), & patch(unitNumber)')
console.log('For your units, you can keep track of payments using: \'rentLate\' & \'paidup\' functions. For example, if the blueHouse unit receives a late payment, you can log it by entering \'blueHouse.rentLate()\'')


function AptUnit (unit, tenant){
	this.unitNumber = unit;
	this.renter = tenant;
	this.occuppied = true;
	this.latePayments = 0;
	this.sendEviction = false;
	this.zombieProof = true;
	this.accountStatus = 'Up to date.';
	this.rentLate = function() {
		this.accountStatus = 'Rent past due.';
		this.latePayments = ++this.latePayments;
		return 'Renter ' + this.renter + ' is past due on Unit ' + this.unitNumber + '.'
	};
	this.paidup = function(){
		this.accountStatus = 'Up to date.';
		return 'Renter ' + this.renter + ' is now up to date on Unit ' + this.unitNumber + '.'
	}
};

var blueHouse = new AptUnit(103, 'Betty White');

var redHouse = new AptUnit(105, 'Mr. Wilson');


function CreateCharacter (name, age){
	this.name = name;
	this.age = age;
	this.alive = true;
	this.walker = false;
	this.headless = false;
	this.nordicKill = function (zombie) {
		zombie.headless = true;
		zombie.walker = false;
		return name + ': \'Try walking without a head, ' + zombie.name + '!\''
	};

	this.breakDoor = function (aptName) {
		aptName.zombieProof = false;
		return 'Somebody better patch ' + aptName.unitNumber + '\'s door with the \'patch\' function.'
	};

	this.patch = function (aptName) {
		aptName.zombieProof = true;
		return 'Whew! That was close!'
	};
};

var joe = new CreateCharacter ('Joe', 26);
var betty = new CreateCharacter ('Betty White', 67);

function CreateZombie (name){
	this.name = name;
	this.alive = false;
	this.walker = true;
	this.headless = false;
	this.breakDoor = function (aptName) {
		aptName.zombieProof = false;
		return 'Somebody better patch ' + aptName.unitNumber + '\'s door with the \'patch\' function.'
	}

	this.patch = function (aptName) {
		return 'What the heck!?!? Zombies don\'t fix doors!'
	}

	this.bite = function (victim) {
		victim.walker = true;
		victim.alive = false;
		return 'Looks like ' + victim.name + ' is a zed-head now. Too bad. '
	}

};


var zombieFred = new CreateZombie ('Fred');
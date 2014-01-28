console.log('Hello there, thanks for checking on my program!');
console.log('To start off, lets say you are an appartment owner who wants to track payments... during a zombie apacolypse.');



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
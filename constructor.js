//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.

var bands = [

{
	name: "Death Gypsies",
	genre: "gypsy metal",
	numberOfPerformers: "9",
	numberOfGroupies: "55"
},

{
	name: "Sad Cowboy",
	genre: "country",
	numberOfPerformers: "1",
	numberOfGroupies: "7"
},
{
	name: "Underwater Tadpole",
	genre: "electronica",
	numberOfPerformers: "1",
	numberOfGroupies: "101010"
}

];


//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.

var Band = function(name, genre, numberOfPerformers, numberOfGroupies){

	this.name = name;
	this.genre = genre;
	this.numberOfPerformers = numberOfPerformers;
	this.numberOfGroupies = numberOfGroupies;
};



//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.

var band1 = new Band("Death Gypsies", "gypsy metal", 9, 55);
var band2 = new Band("Sad Cowboy", "country", 1, 7);
var band3 = new Band("Underwater Tadpole", "electronica", 1, 101010);

 
//Now create a new array called newBands and push each of the objects that you made into that array.
var newBands = [];
newBands.push (band1);
newBands.push (band2);
newBands.push (band3);


//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype method for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.
var Band = function(name, genre, numberOfPerformers, numberOfGroupies){

	this.name = name;
	this.genre = genre;
	this.numberOfPerformers = numberOfPerformers;
	this.numberOfGroupies = numberOfGroupies;
};

var band1 = new Band("Death Gypsies", "gypsy metal", 9, 55);
var band2 = new Band("Sad Cowboy", "country", 1, 7);
var band3 = new Band("Underwater Tadpole", "electronica", 1, 101010);

var newBands = [];
newBands.push (band1);
newBands.push (band2);
newBands.push (band3);

console.log(band1);

Band.prototype.bandInfo = function() {
  alert(this.name + "musical genere is: " + this.genre);
};

band1.bandInfo();



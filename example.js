var a = "ertyu";
var b = 234;
var c = true;

// Object
const d = {
	name: "fghjkl",
	age: 56,
	test: "(§èhjk",
	dhj: b,
	j: [55, 76],
	c: {
		f: {
			k: "c",
		},
	},
};

// Array
const e = ["oijhg", "ghj", "ghjk", 4567, true, a, 2 + 3, "xcv"];

// console.log(e[4]);

// Function
const addition = function (nb1, nb2) {
	return nb1 + nb2;
};

var response = addition(4, 7);

console.log(response);

// const hamburger = document.querySelector();

const btn = document.querySelector(".button-login");

btn.addEventListener("click", addition);

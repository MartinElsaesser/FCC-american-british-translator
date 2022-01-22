const fs = require("fs");
let toBritish = [
	"Mangoes are my favorite fruit.",
	"I ate yogurt for breakfast.",
	"We had a party at my friend's condo.",
	"Can you toss this in the trashcan for me?",
	"The parking lot was full.",
	"Like a high tech Rube Goldberg machine.",
	"To play hooky means to skip class or work.",
	"No Mr. Bond, I expect you to die.",
	"Dr. Grosh will see you now.",
	"Lunch is at 12:15 today."
];
let toAmerican = [
	"We watched the footie match for a while.",
	"Paracetamol takes up to an hour to work.",
	"First, caramelise the onions.",
	"I spent the bank holiday at the funfair.",
	"I had a bicky then went to the chippy.",
	"I've just got bits and bobs in my bum bag.",
	"The car boot sale at Boxted Airfield was called off.",
	"Have you met Mrs Kalyani?",
	"Prof Joyner of King's College, London.",
	"Tea time is usually around 4 or 4.30.",
	"Mangoes are my favorite fruit.",
	"I ate yogurt for breakfast.",
	"We watched the footie match for a while.",
	"Paracetamol takes up to an hour to work.",
];
const Translator = require('../components/translator.js');
const translator = new Translator();
let toBritishTests = "";
toBritish.forEach(text => {
	let response = translator.americanToBritish(text);
	let test = `test("${text}", function () {
		let response = translator.americanToBritish("${text}");
		let valid = ${JSON.stringify(response)};
		assert.deepEqual(response, valid, 'working translation');
	});`;
	// test = test.replace(/"/g, "'");
	test = test.replace(/(\t|\n|\\)/g, "");
	toBritishTests += test;
});
fs.writeFileSync(__dirname + "/toBritish.json", toBritishTests)

let toAmericanTests = "";
toAmerican.forEach(text => {
	let response = translator.britishToAmerican(text);
	let test = `test("${text}", function () {
		let response = translator.britishToAmerican("${text}");
		let valid = ${JSON.stringify(response)};
		assert.deepEqual(response, valid, 'working translation');
	});`;
	// test = test.replace(/"/g, "'");
	test = test.replace(/(\t|\n|\\)/g, "");
	toAmericanTests += test;
});
fs.writeFileSync(__dirname + "/toAmerican.json", toAmericanTests)
const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
	suite("American to British", () => {
		test("Mangoes are my favorite fruit.", function () {
			let response = translator.americanToBritish(
				"Mangoes are my favorite fruit."
			);
			let valid = {
				text: "Mangoes are my favorite fruit.",
				translation:
					"Mangoes are my <span class=\"highlight\">favourite</span> fruit.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("I ate yogurt for breakfast.", function () {
			let response = translator.americanToBritish(
				"I ate yogurt for breakfast."
			);
			let valid = {
				text: "I ate yogurt for breakfast.",
				translation:
					"I ate <span class=\"highlight\">yoghurt</span> for breakfast.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("We had a party at my friend's condo.", function () {
			let response = translator.americanToBritish(
				"We had a party at my friend's condo."
			);
			let valid = {
				text: "We had a party at my friend's condo.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Can you toss this in the trashcan for me?", function () {
			let response = translator.americanToBritish(
				"Can you toss this in the trashcan for me?"
			);
			let valid = {
				text: "Can you toss this in the trashcan for me?",
				translation:
					"Can you toss this in the <span class=\"highlight\">bin</span> for me?",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("The parking lot was full.", function () {
			let response = translator.americanToBritish("The parking lot was full.");
			let valid = {
				text: "The parking lot was full.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Like a high tech Rube Goldberg machine.", function () {
			let response = translator.americanToBritish(
				"Like a high tech Rube Goldberg machine."
			);
			let valid = {
				text: "Like a high tech Rube Goldberg machine.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("To play hooky means to skip class or work.", function () {
			let response = translator.americanToBritish(
				"To play hooky means to skip class or work."
			);
			let valid = {
				text: "To play hooky means to skip class or work.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("No Mr. Bond, I expect you to die.", function () {
			let response = translator.americanToBritish(
				"No Mr. Bond, I expect you to die."
			);
			let valid = {
				text: "No Mr. Bond, I expect you to die.",
				translation: "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Dr. Grosh will see you now.", function () {
			let response = translator.americanToBritish(
				"Dr. Grosh will see you now."
			);
			let valid = {
				text: "Dr. Grosh will see you now.",
				translation: "<span class=\"highlight\">Dr</span> Grosh will see you now.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Lunch is at 12:15 today.", function () {
			let response = translator.americanToBritish("Lunch is at 12:15 today.");
			let valid = {
				text: "Lunch is at 12:15 today.",
				translation: "Lunch is at <span class=\"highlight\">12.15</span> today.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
	});
	suite("British to American", () => {
		test("We watched the footie match for a while.", function () {
			let response = translator.britishToAmerican(
				"We watched the footie match for a while."
			);
			let valid = {
				text: "We watched the footie match for a while.",
				translation:
					"We watched the <span class=\"highlight\">soccer</span> match for a while.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Paracetamol takes up to an hour to work.", function () {
			let response = translator.britishToAmerican(
				"Paracetamol takes up to an hour to work."
			);
			let valid = {
				text: "Paracetamol takes up to an hour to work.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("First, caramelise the onions.", function () {
			let response = translator.britishToAmerican(
				"First, caramelise the onions."
			);
			let valid = {
				text: "First, caramelise the onions.",
				translation:
					"First, <span class=\"highlight\">caramelize</span> the onions.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("I spent the bank holiday at the funfair.", function () {
			let response = translator.britishToAmerican(
				"I spent the bank holiday at the funfair."
			);
			let valid = {
				text: "I spent the bank holiday at the funfair.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("I had a bicky then went to the chippy.", function () {
			let response = translator.britishToAmerican(
				"I had a bicky then went to the chippy."
			);
			let valid = {
				text: "I had a bicky then went to the chippy.",
				translation:
					"I had a <span class=\"highlight\">cookie</span> then went to the chippy.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("I've just got bits and bobs in my bum bag.", function () {
			let response = translator.britishToAmerican(
				"I've just got bits and bobs in my bum bag."
			);
			let valid = {
				text: "I've just got bits and bobs in my bum bag.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("The car boot sale at Boxted Airfield was called off.", function () {
			let response = translator.britishToAmerican(
				"The car boot sale at Boxted Airfield was called off."
			);
			let valid = {
				text: "The car boot sale at Boxted Airfield was called off.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Have you met Mrs Kalyani?", function () {
			let response = translator.britishToAmerican("Have you met Mrs Kalyani?");
			let valid = {
				text: "Have you met Mrs Kalyani?",
				translation: "Have you met <span class=\"highlight\">Mr.</span>s Kalyani?",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Prof Joyner of King's College, London.", function () {
			let response = translator.britishToAmerican(
				"Prof Joyner of King's College, London."
			);
			let valid = {
				text: "Prof Joyner of King's College, London.",
				translation: "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Tea time is usually around 4 or 4.30.", function () {
			let response = translator.britishToAmerican(
				"Tea time is usually around 4 or 4.30."
			);
			let valid = {
				text: "Tea time is usually around 4 or 4.30.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Mangoes are my favorite fruit.", function () {
			let response = translator.britishToAmerican(
				"Mangoes are my favorite fruit."
			);
			let valid = {
				text: "Mangoes are my favorite fruit.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("I ate yogurt for breakfast.", function () {
			let response = translator.britishToAmerican(
				"I ate yogurt for breakfast."
			);
			let valid = {
				text: "I ate yogurt for breakfast.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("We watched the footie match for a while.", function () {
			let response = translator.britishToAmerican(
				"We watched the footie match for a while."
			);
			let valid = {
				text: "We watched the footie match for a while.",
				translation:
					"We watched the <span class=\"highlight\">soccer</span> match for a while.",
			};
			assert.deepEqual(response, valid, "working translation");
		});
		test("Paracetamol takes up to an hour to work.", function () {
			let response = translator.britishToAmerican(
				"Paracetamol takes up to an hour to work."
			);
			let valid = {
				text: "Paracetamol takes up to an hour to work.",
				translation: "Everything looks good to me!",
			};
			assert.deepEqual(response, valid, "working translation");
		});
	});
});

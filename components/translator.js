const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const britishToAmericanSpelling = require('./british-to-american-spelling.js');
const britishToAmericanTitles = require("./british-to-american-titles.js")

class Translator {
	americanToBritish(text) {
		let words = text.split(" ");
		let modified = false;
		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			if (americanOnly[word]) {
				words[i] = `<span class='highlight'>${americanOnly[word]}</span>`;
				modified = true;
			}
			else if (americanToBritishSpelling[word]) {
				words[i] = `<span class='highlight'>${americanToBritishSpelling[word]}</span>`;
				modified = true;
			}
			else if (americanToBritishTitles[word]) {
				words[i] = `<span class='highlight'>${americanToBritishTitles[word]}</span>`;
				modified = true;
			}
		}
		let translation = words.join(" ");
		if (translation.match(/(\d\d)(?::)(\d\d)/g)) {
			translation = translation.replace(/(\d\d)(?::)(\d\d)/g, "$1.$2")
			modified = true;
		}
		if (modified) return { text, translation }
		return { text, translation: "Everything looks good to me!" }
	}
	britishToAmerican(text) {
		let words = text.split(" ");
		let modified = false;
		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			if (britishOnly[word]) {
				words[i] = `<span class='highlight'>${britishOnly[word]}</span>`;
				modified = true;
			}
			else if (britishToAmericanSpelling[word]) {
				words[i] = `<span class='highlight'>${britishToAmericanSpelling[word]}</span>`;
				modified = true;
			}
			else if (britishToAmericanTitles[word]) {
				words[i] = `<span class='highlight'>${britishToAmericanTitles[word]}</span>`;
				modified = true;
			}
		}
		let translation = words.join(" ");
		if (translation.match(/(\d\d)(?:.)(\d\d)/g)) {
			translation = translation.replace(/(\d\d)(?:.)(\d\d)/g, "$1:$2")
			modified = true;
		}
		if (modified) return { text, translation }
		return { text, translation: "Everything looks good to me!" }
	}
}

module.exports = Translator;
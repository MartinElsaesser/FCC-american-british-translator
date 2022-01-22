const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const britishOnly = require('./british-only.js')
const britishToAmericanSpelling = require('./british-to-american-spelling.js');

class Translator {
	americanToBritish(text) {
		let words = text.split(" ");
		let modified = false;
		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			if (americanOnly[word]) {
				words[i] = `<span class="highlight">${americanOnly[word]}</span>`;
				modified = true;
			}
			else if (americanToBritishSpelling[word]) {
				words[i] = `<span class="highlight">${americanToBritishSpelling[word]}</span>`;
				modified = true;
			}
			// else if (americanToBritishTitles[word]) {
			// 	words[i] = `<span class="highlight">${americanToBritishTitles[word]}</span>`;
			// 	modified = true;
			// }
		}
		let translation = words.join(" ");
		if (translation.match(/(\d\d)(?::)(\d\d)/)) {
			translation = translation.replace(/(\d\d)(?::)(\d\d)/g, '<span class="highlight">$1.$2</span>')
			modified = true;
		}
		if (translation.match(/(mr.|mrs.|ms.|mx.|dr.|prof.)/i)) {
			translation = translation.replace(/(mr|mrs|ms|mx|dr|prof)./gi, '<span class="highlight">$1</span>')
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
				words[i] = `<span class="highlight">${britishOnly[word]}</span>`;
				modified = true;
			}
			else if (britishToAmericanSpelling[word]) {
				words[i] = `<span class="highlight">${britishToAmericanSpelling[word]}</span>`;
				modified = true;
			}
		}
		let translation = words.join(" ");
		if (translation.match(/(\d\d)(?:.)(\d\d)/g)) {
			translation = translation.replace(/(\d\d)(?:.)(\d\d)/g, '<span class="highlight">$1:$2</span>')
			modified = true;
		}
		if (translation.match(/(mr|mrs|ms|mx|dr|prof)/i)) {
			translation = translation.replace(/(mr|mrs|ms|mx|dr|prof)/gi, '<span class="highlight">$1.</span>')
			modified = true;
		}
		if (modified) return { text, translation }
		return { text, translation: "Everything looks good to me!" }
	}
}

module.exports = Translator;
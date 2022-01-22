const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
	suite("POST /api/translate", () => {

		test("text and locale", function (done) {
			let data = {
				text: "Lunch is at 12:15 today.",
				locale: "american-to-british"
			}
			chai.request(server)
				.post("/api/translate")
				.type("form")
				.send(data)
				.end((err, res) => {
					assert.equal(res.body.text, 'Lunch is at 12:15 today.');
					assert.equal(res.body.translation, 'Lunch is at <span class="highlight">12.15</span> today.');
					done();
				});
		});

		test("text and invalid locale", function (done) {
			let data = {
				text: "Lunch is at 12:15 today.",
				locale: "french-to-british"
			}
			chai.request(server)
				.post("/api/translate")
				.type("form")
				.send(data)
				.end((err, res) => {
					assert.equal(res.body.error, 'Invalid value for locale field');
					done();
				});
		});

		test("missing text field", function (done) {
			let data = {
				text: "",
				locale: "french-to-british"
			}
			chai.request(server)
				.post("/api/translate")
				.type("form")
				.send(data)
				.end((err, res) => {
					assert.equal(res.body.error, 'No text to translate');
					done();
				});
		});

		test("missing text field", function (done) {
			let data = {
				text: "Lunch is at 12:15 today.",
				locale: ""
			}
			chai.request(server)
				.post("/api/translate")
				.type("form")
				.send(data)
				.end((err, res) => {
					assert.equal(res.body.error, 'Required field(s) missing');
					done();
				});
		});

		test("empty text", function (done) {
			let data = {
				text: "",
				locale: "american-to-british"
			}
			chai.request(server)
				.post("/api/translate")
				.type("form")
				.send(data)
				.end((err, res) => {
					assert.equal(res.body.error, 'No text to translate');
					done();
				});
		});

		test("no translation", function (done) {
			let data = {
				text: "Hello there",
				locale: "american-to-british"
			}
			chai.request(server)
				.post("/api/translate")
				.type("form")
				.send(data)
				.end((err, res) => {
					assert.equal(res.body.text, "Hello there");
					assert.equal(res.body.translation, "Everything looks good to me!");
					done();
				});
		});

	})
});

const chai = require('chai'),
assert = chai.assert,
chaiHttp = require('chai-http');
const { response } = require('express');
const search = require('../routes/authors');
// const article = require('../models/author');

chai.use(chaiHttp);

describe('Search function test', () => {
    it('If search button is clicked with no input, the page returns to the main page', () => {
        chai.request(search)
        .get('/')
        .end(function(err, res) {
            expect(res).to.not.redirect();
        });
    });

    it('display relevant data similar to the characters, complete or incomplete, input', () => {
        //only able to test redirection 
        chai.request(search)
        .get('/')
        .end(function(err, res) {
            expect(res).to.redirect('authors/index');
        });
        //could be further improved by passing values 
    });
});
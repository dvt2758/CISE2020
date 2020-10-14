const chai = require('chai'),
assert = chai.assert,
expect = chai.expect,
should = chai.should(),
chaiHttp = require('chai-http');
const { request } = require('chai');
const { response } = require('express');
const SEER = require('./../routes/articles');
const article = require('./../models/article');

chai.use(chaiHttp);

describe('Redirection test from SEER Homepage', () => {
    it('Check that the read more button only redirects to but does not allow editing of the according page', () => {
        chai.request(SEER)
        .get('/:slug')
        .end(function(err, res) {
            expect(res).to.not.redirect("/edit/:id");
            response.should.have.property('unique');
            response.should.have.property('unique').eq('true');
            response.body.should.be.a('String');
            // done();
        });
    });

    it('Check that the edit button redirects to and allows editing of the according page', () => {
        chai.request(SEER)
        .get('/edit/:id')
        .end(function(err, res) {
            expect(res).to.redirect("articles/edit");
            expect(res).to.be.html; 
            // done(); 
        });
    });
});
const chai = require('chai'),
assert = chai.assert,
expect = chai.expect,
should = chai.should(),
chaiHttp = require('chai-http');
const { request } = require('chai');
const { response } = require('express');
const SEER = require('./../routes/articles');

chai.use(chaiHttp);

describe('Field test for SEER Homepage', function(){

    let article = SEER.get

    it('check that the read more button only directs to but does not allow editing of the according page', function(){
        chai.request(SEER)
            .get("articles/<%= article.slug %>")
            .end((err, response) => {
                expect(request).to.be.html;
                response.should.have.status(true);
                response.body.should.be.a('String');
                //test if formfields enable editing - should fail 
            done();
            })
        
    })
    
    // it('check that the edit button directs to, access, and allow user to change the according page', function(){
        
    // });
    
    // it('check that the delete button removes the data off the database', function(){
        
    // })

});
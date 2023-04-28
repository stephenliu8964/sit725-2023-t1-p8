var expect  = require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/api/cats";
let cat = {
    title: 'kitten-unique-3',
    link: 'kitten',
    path: 'kitten',
    description: 'kitten'
}

describe('GET Request', function() {
    it('returns status 200 to check if api works', function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });

    it('returns data from DB', function(done){
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('Post a cat', function(){
    it('insert a cat to database', function(done){
        request.post({url:url, form: cat}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();
        });
    });
});

describe('Delete a cat', function(){
    it('Delete a cat from database', function(done){
        request.delete({url:url, form: cat}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('removed');
            done();
        });
    });
});
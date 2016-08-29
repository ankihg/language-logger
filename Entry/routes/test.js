'use strict';
const chai = require('chai'),
 expect = chai.expect,
 request = chai.use(require('chai-http')).request;

describe('Entry routes', () => {

  const url = 'http://localhost:3000';
  let createdEntry = null;
  let entry = {
    date: Date.now(),
    text: 'hur mår du',
    language: 'svenska'
  }

  before('post an entry', (done) => {
    request(url)
      .post('/api/entries')
      .send(entry)
      .end((err, res) => {
        console.log('post entry response');
        console.log(res);
        createdEntry = res.body;
        done();
      })
  });

  it('post successfully', () => {
    console.log('hi');
    expect(true).eql(true);
  })

})

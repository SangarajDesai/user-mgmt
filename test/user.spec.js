let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

/**
 * Test create user API
 */

describe(`POST create-user`, () => {
  it(`it should create user in the database`, (done) => {
    let user = {
        email:"test111@g12.com",
        password:"1234888"
    };

    chai
      .request(server)
      .post('/users/v1.0')
      .send(user)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    done();
  });
});

/**
 * Test login API
 */

 describe(`user login`, () => {
    it(`user should be able to login`, (done) => {
      let user = {
          email:"test111@g12.com",
          password:"1234888"
      };
  
      chai
        .request(server)
        .post('/login/v1.0')
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
      done();
    });
  });

  /**
 * Test fetch users API
 */

 describe(`fetch users`, () => {
    it(`it should retrive all the users`, (done) => {

      chai
        .request(server)
        .get('/users/v1.0?pageNo=1&limit=1')
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiJ9.dGVzdDExMkBnMTIuY28.NALyJoZ4L_uXNxzN7Y1cUkGCv_4B73RzBrMjebbjwvM')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
      done();
    });
  });

  /**
 * Test fetch user API
 */

 describe(`fetch users`, () => {
    it(`it should retrive  user data`, (done) => {

      chai
        .request(server)
        .get('/users/v1.0/613f5eb3a08db9a4ad895a4e')
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiJ9.dGVzdDExMkBnMTIuY28.NALyJoZ4L_uXNxzN7Y1cUkGCv_4B73RzBrMjebbjwvM')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
      done();
    });
  });

  /**
 * Test delete user API
 */

 describe(`delete`, () => {
    it(`it should delete  user data`, (done) => {

      chai
        .request(server)
        .delete('/users/v1.0/613f5eb3a08db9a4ad895a4b')
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiJ9.dGVzdDExMkBnMTIuY28.NALyJoZ4L_uXNxzN7Y1cUkGCv_4B73RzBrMjebbjwvM')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
      done();
    });
  });

  

  

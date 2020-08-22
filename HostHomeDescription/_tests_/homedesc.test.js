const app = require('../server');
const supertest = require('supertest');
const superagent = require('superagent');
const randomId = require('randomatic');
const fs = require('fs');
const path = require('path');

const request = supertest(app);

describe('Integration Testing for Home Description module server and DB', () => {

  it('Initial check for jest suite', (done) => {
    expect(1).toBe(1);
    done();
  });

  test('Check 200 success status code for the existing room id ', (done) => {
    request.get('/rooms/1')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body.amenities_section.air_conditioning).toEqual(true);
        done();
      });
  });

  test('Check total number of collections in the DB to be 100', (done) => {
    request.get('/rooms')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBeUndefined();
        expect(response.body.length).toEqual(100);
        done();
      });
  });

  test(`Check whether the expected 'overview_section' property is present for the existing room id `, (done) => {
    request.get('/rooms/78/')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('overview_section');
        expect(response.body.overview_section.place_type).toEqual('Private room');
        expect(response.body.overview_section.guest_stay_duration).toEqual({ min_nights: 48, max_nights: 25 });
        done();
      });
  });

  test(`Check whether the expected 'location' property is present in the 'title' endpoint`, (done) => {
    request.get('/rooms/2/title')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('location');
        done();
      });
  });

  test(`Check whether the expected 'common_spaces' property has empty array`, (done) => {
    request.get('/rooms/54/sleeping-arranges')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('common_spaces');
        expect(response.body.common_spaces.length).toBe(0);
        done();
      });
  });

  test(`Check whether the expected 'sleeping_beds' property has 'Queen' value in an array`, (done) => {
    request.get('/rooms/55/sleeping-arranges')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('sleeping_beds');
        expect(response.body.sleeping_beds.length).toBe(2);
        expect(response.body.sleeping_beds).toContain('Queen');
        done();
      });
  });

  test('Check 404 failure status code for the non-existing room id ', (done) => {
    request.get('/rooms/404')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
        expect(response.body.message).toEqual('Unable to find the Home Description by id');
        done();
      });
  });

  test('Check 500 failure status code for the duplicate key', (done) => {
    request.post('/rooms').send({_id: 1})
    .then((response) => {
        expect(response.statusCode).toEqual(500)
        expect(response.body.message).toEqual('E11000 duplicate key error collection: homeDesc.homedescriptions index: _id_ dup key: { _id: 1 }');
        done();
      });
  });

  test('Save image to a folder from cloudinary', (done) => {
    let url = 'https://res.cloudinary.com/dumikauss/image/upload/v1596836172/waterBnB-images/1057x793_nbeadu.jpg';
    superagent.get(url)
      .then(response => {
        var imageData = response.body;
        Buffer.from(imageData).toString('base64');

        // let randomFileId = `cloudinary${randomId('0', 2)}`;
        // let filePath = path.resolve(path.join(__dirname, `/images/${randomFileId}.jpg`));
        let filePath = path.resolve(path.join(__dirname, `/images/cloudinary.jpg`));
        fs.writeFileSync(filePath, imageData, 'binary', (err, data) => {
          if (err) {
            console.log('Unable to create an image file');
          } else {
            console.log('Able to save the image file 😇', data);
          }
        })
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toEqual('image/jpeg');
        done();
      })
  });

  test('Save json to a folder from AWS s3 bucket', (done) => {
    let url = 'https://fec-gai-pricing.s3-us-west-1.amazonaws.com/json/pricing.json';
    superagent.get(url)
      .then(response => {
        let json = JSON.stringify(response.body);

        let filePath = path.resolve(path.join(__dirname, `/json/pricing.json`));
        fs.writeFileSync(filePath, json,  (err, data) => {
          if (err) {
            console.log('Unable to create a json file');
          } else {
            console.log('Able to save the json file 😇', data);
          }
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body).toHaveProperty('service_fee', 9);
        expect(response.headers['content-type']).toEqual('application/json');
        done();
      })
  });

});



/*
https://res.cloudinary.com/dumikauss/image/upload/v1596835101/waterBnB-images/1057x793_jnom2d.jpg
*/





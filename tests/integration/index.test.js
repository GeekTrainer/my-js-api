const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../src/app');

let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Integration tests', () => {
  test('should connect to in-memory db and get a response from GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  // Add more integration tests here
});
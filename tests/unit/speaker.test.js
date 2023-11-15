const Speaker = require('../../src/models/index');
// import in-memory mongodb server
const { MongoMemoryServer } = require('mongodb-memory-server');
// import mongoose
const mongoose = require('mongoose');

describe('Speaker Schema', () => {
  let speaker;
  let mongoServer;

  beforeAll(async () => {
    // create an in-memory mongodb server
    mongoServer = new MongoMemoryServer();
    // get the connection string for the in-memory server
    const mongoUri = await mongoServer.getUri();
    // connect to the in-memory server
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    // disconnect mongoose from the in-memory server
    await mongoose.disconnect();
    // stop the in-memory server
    await mongoServer.stop();
  });

  beforeEach(() => {
    speaker = new Speaker({
      name: 'Test Speaker',
      email: 'test@test.com',
      linkedin: 'https://linkedin.com'
    });
  });

  test('should have a name field of type String', () => {
    const nameField = Speaker.schema.obj.name;
    expect(nameField).toEqual({
      type: String,
      required: true,
    });
  });

  test('should have an email field of type String', () => {
    const emailField = Speaker.schema.obj.email;
    expect(emailField).toEqual({
      type: String,
      required: true,
    });
  });

  test('should have a linkedin field of type String', () => {
    const linkedinField = Speaker.schema.obj.linkedin;
    expect(linkedinField).toEqual({
      type: String,
      required: true,
    });
  });

  test('should save speaker with valid fields', async () => {
    await expect(speaker.save()).resolves.toBe(speaker);
  });

  test('should fail if no name is provided', async () => {
    speaker.name = null;
    await expect(speaker.save()).rejects.toThrow();
  });

  test('should fail if no email is provided', async () => {
    speaker.email = null;
    await expect(speaker.save()).rejects.toThrow();
  });

  test('should fail if no linkedin is provided', async () => {
    speaker.linkedin = null;
    await expect(speaker.save()).rejects.toThrow();
  });
});
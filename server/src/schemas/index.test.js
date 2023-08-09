import { describe, it, beforeAll, afterAll } from '@jest/globals';

const mongoose = require('mongoose');
const request = require('supertest');
const { app, connect: connectDB } = require('./index');

describe('Testing backend', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    if (mongoose.connection) {
      await mongoose.connection.close();
    }
  });

  it('responds with 200 OK', async () => {
    const res = await request(app).get('/').expect(200);
  });
});

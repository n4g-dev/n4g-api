const assert = require('assert');
const app = require('../../src/app');

describe('\'buses\' service', () => {
  it('registered the service', () => {
    const service = app.service('buses');

    assert.ok(service, 'Registered the service');
  });
});

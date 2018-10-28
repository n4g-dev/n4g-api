const assert = require('assert');
const app = require('../../src/app');

describe('\'towns\' service', () => {
  it('registered the service', () => {
    const service = app.service('towns');

    assert.ok(service, 'Registered the service');
  });
});

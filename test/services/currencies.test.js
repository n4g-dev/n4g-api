const assert = require('assert');
const app = require('../../src/app');

describe('\'currencies\' service', () => {
  it('registered the service', () => {
    const service = app.service('currencies');

    assert.ok(service, 'Registered the service');
  });
});

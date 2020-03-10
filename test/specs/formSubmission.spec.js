const assert = require('assert');

describe('form submission tests', () => {
  it('validates the form', () => {
    browser.url('/demo');
    browser.pause(3000);
    assert.equal(false, true);
  });
});

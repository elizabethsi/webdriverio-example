const assert = require('assert');

describe('navigation tests', () => {
  it('loads the homepage', () => {
    browser.url('/');
    browser.pause(3000);
    assert.equal(false, true);
  });
});

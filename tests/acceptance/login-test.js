import { test } from 'qunit';
import moduleForAcceptance from 'ppv/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'ppv/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('it authenticates a session', function(assert) {
  var app = this.application;
  assert.expect(1);
  authenticateSession(app);
  visit('/homepageGallery');


  andThen(function() {
    assert.equal(currentRouteName(), 'homepageGallery');
  });
});

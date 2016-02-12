import { test } from 'qunit';
import moduleForAcceptance from 'ppv/tests/helpers/module-for-acceptance';
import { authenticateSession, currentSession, invalidateSession } from 'ppv/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | authentication');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('it authenticates a session', function(assert) {
  assert.expect(2);
  var app = this.application;
  authenticateSession(app, { userId: 1, otherData: 'some-data' });
  visit('/homepageGallery');


  andThen(function() {
    assert.equal(currentRouteName(), 'homepageGallery');
    let session = currentSession(app);
    assert.equal(session.get('data.authenticated.userId'),1);
  });
});
test('it redirects to login if visiting protected route without auth', function(assert) {
  assert.expect(1);
  var app = this.application;
    invalidateSession(app);
    visit('/homepageGallery');
  andThen(function(){
    assert.equal(currentPath(), 'login');
  });
});

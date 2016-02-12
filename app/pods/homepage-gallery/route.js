import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;


export default Ember.Route.extend(AuthenticatedRouteMixin, {
session: service('session'),
  
  actions: {
    logout: function() {
      this.get('session').invalidate();
    }
  }
});

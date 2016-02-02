import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({UnauthenticatedRouteMixin,
  actions: { 
    createAccount: function(aEmail, aPassword){
// store.createRecord('account', {email: aEmail, password: aPassword}).then(function(){ alert("YAYY you did it");});
    var newRecord = this.store.createRecord('account', {email: aEmail, password: aPassword});
    newRecord.save();    
},
  }
});

import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({UnauthenticatedRouteMixin,
    actions: { 
    createAccount: function(aEmail, aPassword){ 

      var onFailure = function(xhr) {
        if (xhr.status === 500){
          return alert('Internal server error. Contact administrator');
        }  else if (xhr.status === 404) {
          return true;
        } else {
          var errors = Ember.$.parseJSON(xhr.responseText).errors;
          return alert(errors);
        }
      }; 
      var newRecord = this.store.createRecord('account', {email: aEmail, password: aPassword});
      newRecord.save().then(onFailure);    

},
  }
});

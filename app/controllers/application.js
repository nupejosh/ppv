import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    authenticate(){
      // let { identification, password } = this.getProperties('identification', 'password');
     this.get('session').open('venmo-oauth2').then(function(){
      }, function(error){
        this.controllerFor('application').set('error', 'Could not sign you in: '+error.message);
      });
      // this.get('session').authenticate('authenticator:torii', identification, password).catch((reason) => {
      //   this.set('errorMessage', reason.error);
      // });
    }  
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: { 
    createThing: function() {
      let { accountEmail, accountPassword } = this.getProperties('accountEmail', 'accountPassword');
      this.sendAction('makeAccount', accountEmail, accountPassword);
    }, 
  }
});

import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  // This will be necessary if I weren't proxying my server 
  // serverTokenEndpoint: 'http://localhost:3777/accounts/sign_in'

  // I'm actually using it here bc the devise authenticator automatically uses the users/sign_in endpoint 
  // I'm experimenting with using 'Account' instead of 'User' so that talking with customers is easier with the same lang
  // serverTokenEndpoint: '/accounts/sign_in',
  // resourceName: 'account'
});

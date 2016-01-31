import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.ActiveModelAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise'
});

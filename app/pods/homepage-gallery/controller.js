import Ember from 'ember';

export default Ember.Controller.extend({
  columnWidth: 80,
  gutter: 50,
  items: Ember.A([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ])
});

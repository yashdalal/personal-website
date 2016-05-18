import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  company: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('string'),
  description: DS.attr('string')
});

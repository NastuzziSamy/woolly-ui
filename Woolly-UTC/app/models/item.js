import DS from 'ember-data';
import Model from 'ember-data/model';
import Ember from 'ember';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';


export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  initialQuantity : attr('number'),
  remainingQuantity: attr('number'),

  itemspecifications  : hasMany('itemspecification'),
});

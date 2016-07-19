import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('education');
  this.route('experience');
  this.route('photos');
  this.route('projects');
  this.route('contact');
  this.route('music');
  this.route('skills');
});

export default Router;

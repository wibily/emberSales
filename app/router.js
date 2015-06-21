import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});



Router.map(function() {
  this.resource('share', { path: '/' }, function () {
    this.route('comments');
    this.route('participants');
    this.route('options');
  });
});


export default Router;

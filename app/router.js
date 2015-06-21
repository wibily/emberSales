import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


Router.map(function () {
  this.resource('share',{ path: '/share/:uuid' }, function () {
    this.route('comments');
    this.route('participants');
    this.route('options');
  });
});

//102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99

export default Router;

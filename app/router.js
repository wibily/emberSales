import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('shares');
  this.route('share', {path: "/share/:share_uuid"});

});

export default Router;

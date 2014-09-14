/* global FB */
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn: function(){
      if (this.get('session.signedIn')) {
        return;
      }

      var session = this.get('session');
      this.get('torii').open('facebook-connect').then(function(data){
        session.set('signedIn', true);
        session.set('fbId', data.userId);

        return new Ember.RSVP.Promise(function(resolve){
          FB.api('/me', function(info){
            session.set('name', info.first_name);
            Ember.run(null, resolve);
          });
        });
      }).catch(function(err){
        alert('There was an error connecting to Facebook: ' + err);
      });
    }
  }
});

var sampleMessage = "I hope this note brings with it a little light, a whiff of the ocean, a promise of warmth. It can't be easy to shed the funk from this endless winter but let's try. Let's think of the beach, sunshine, warm water that awaits you at the end of these crazy weeks at work. You deserve so much more and I am so sure it will come, so soon. Hang in there!";

export default Ember.Route.extend({
  model: function(){
    return {
      message: sampleMessage,
      email: 'friend@email.com'
    };
  }
});

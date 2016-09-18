import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleBody(skill_name) {
      var skill_id = "skill-title-"+skill_name;
      document.getElementById(skill_id).style.color = "black";
    }
  }
});

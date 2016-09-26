import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter: function(){
    var skill = this.element.getElementsByTagName("p")[0];
    var icon = this.element.getElementsByTagName("img")[0];
    var opacity = 0;
    var timerID = setInterval(function(){
      if (opacity < 1){
        opacity += 0.1;
        skill.style.opacity = opacity;
      } else {
        clearInterval(timerID);        
      }
    }, 100);
  },
  mouseLeave: function(){
    var skill = this.element.getElementsByTagName("p")[0];
    var icon = this.element.getElementsByTagName("img")[0];
    var opacity = 1;
    var timerID = setInterval(function(){
      if (opacity > 0){
        opacity = opacity - 0.1;
        skill.style.opacity = opacity;
      } else {
        clearInterval(timerID);        
      }
    }, 100);
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter: function(){
    // console.log(this.element.getElementsByTagName("p")[0]);//.getElementsByTagName("p")[0]);
    var s = this.element.getElementsByTagName("p")[0].style;
    s.color = "black";
    // (function fade() {(s.opacity-=.1)<.1?s.display="none":setTimeout(fade,700)})();
  },
  mouseLeave: function(){
    // alert("mouse leave");
    var s = this.element.getElementsByTagName("p")[0].style;
    s.color = "white";
  }
});

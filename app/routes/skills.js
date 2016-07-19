import Ember from 'ember';

var icons = [
  "assets/images/skill-icons/html.png",
  "assets/images/skill-icons/css.png",
  "assets/images/skill-icons/bootstrap.png",
  "assets/images/skill-icons/sass.png",
  "assets/images/skill-icons/aws.png",
  "assets/images/skill-icons/ember.png",
  "assets/images/skill-icons/firebase.png",
  "assets/images/skill-icons/git.png",
  "assets/images/skill-icons/github.png",
  "assets/images/skill-icons/vim.png",
  "assets/images/skill-icons/indesign.png",
  "assets/images/skill-icons/photoshop.png",
  "assets/images/skill-icons/java.png",
  "assets/images/skill-icons/ruby.png",
  "assets/images/skill-icons/rails.png",
  "assets/images/skill-icons/wordpress.png",
  "assets/images/skill-icons/soccer.png",
  "assets/images/skill-icons/taekwondo.png"
]

export default Ember.Route.extend({
  model(){
    return icons;
  }
});

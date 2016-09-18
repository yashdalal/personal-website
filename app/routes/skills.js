import Ember from 'ember';

var skills = [{
    name: "HTML",
    icon: "assets/images/skill-icons/html.png"
  },{
    name: "CSS",
    icon: "assets/images/skill-icons/css.png"
  },{
    name: "Bootstrap",
    icon: "assets/images/skill-icons/bootstrap.png"
  },{
    name: "SASS",
    icon: "assets/images/skill-icons/sass.png"
  },{
    name: "AWS",
    icon: "assets/images/skill-icons/aws.png"
  },{
    name: "Ember",
    icon: "assets/images/skill-icons/ember.png"
  },{
    name: "Firebase",
    icon: "assets/images/skill-icons/firebase.png"
  },{
    name: "GIT",
    icon: "assets/images/skill-icons/git.png"
  },{
    name: "Github",
    icon: "assets/images/skill-icons/github.png"
  },{
    name: "Vim",
    icon: "assets/images/skill-icons/vim.png"
  },{
    name: "Indesign",
    icon: "assets/images/skill-icons/indesign.png"
  },{
    name: "Photoshop",
    icon: "assets/images/skill-icons/photoshop.png"
  },{
    name: "Java",
    icon: "assets/images/skill-icons/java.png"
  },{
    name: "Ruby",
    icon: "assets/images/skill-icons/ruby.png"
  },{
    name: "Rails",
    icon: "assets/images/skill-icons/rails.png"
  },{
    name: "Wordpress",
    icon: "assets/images/skill-icons/wordpress.png"
  },{
    name: "Soccer",
    icon: "assets/images/skill-icons/soccer.png"
  },{
    name: "Taekwondo",
    icon: "assets/images/skill-icons/taekwondo.png"
  }
];

export default Ember.Route.extend({
  model(){
    return skills;
  }
});
